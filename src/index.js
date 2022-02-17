function get_total_price(adult_count, child_count) {
  let total_fee = 250 * adult_count + 100 * child_count;
  if (adult_count + child_count >= 15) {
    total_fee *= 0.8;
  }
  console.log(total_fee);
}

get_total_price(10, 5);
