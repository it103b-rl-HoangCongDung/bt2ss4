const basePriceSizeS = 35000;
const extraPriceSizeM = 6000;
const extraPriceSizeL = 10000;
const toppingPrice = 8000;

const orderSizes = 'MLXSM';
const toppingCount = 2;
const isGoldMember = true;

let totalDrinkAmount = 0;

for (let orderIndex = 0; orderIndex < orderSizes.length; orderIndex++) {
  const currentDrinkSize = orderSizes[orderIndex];

  // Khắc phục lỗi: Dùng continue thay vì break để không bỏ sót các phần tử phía sau ký tự hủy 'X'
  if (currentDrinkSize === 'X') {
    continue;
  }

  if (currentDrinkSize === 'S') {
    totalDrinkAmount += basePriceSizeS;
  } else if (currentDrinkSize === 'M') {
    totalDrinkAmount += (basePriceSizeS + extraPriceSizeM);
  } else if (currentDrinkSize === 'L') {
    totalDrinkAmount += (basePriceSizeS + extraPriceSizeL);
  }
}

let finalBillAmount = (totalDrinkAmount + toppingCount * toppingPrice) * (isGoldMember ? 0.9 : 1.0);
console.log('Tổng tiền hóa đơn:', finalBillAmount, 'VNĐ');

/*
================================================================================
BẢNG ĐỐI SOÁT KẾT QUẢ KIỂM THỬ (TEST RESULTS COMPARISON TABLE)
================================================================================
1. Input chuỗi đơn hàng: 'MLXSM'
   - 'M': 35000 + 6000 = 41000 VNĐ
   - 'L': 35000 + 10000 = 45000 VNĐ
   - 'X': Bị hủy (continue bỏ qua)
   - 'S': 35000 VNĐ
   - 'M': 35000 + 6000 = 41000 VNĐ
   => Tổng tiền nước (totalDrinkAmount) = 41000 + 45000 + 35000 + 41000 = 162000 VNĐ

2. Tiền topping:
   - toppingCount = 2 * 8000 = 16000 VNĐ

3. Tổng trước giảm giá:
   - 162000 + 16000 = 178000 VNĐ

4. Giảm giá thành viên Gold (isGoldMember = true, nhân hệ số 0.9):
   - 178000 * 0.9 = 160200 VNĐ

=> Kết quả thực tế in ra console: Tổng tiền hóa đơn: 160200 VNĐ
================================================================================
*/