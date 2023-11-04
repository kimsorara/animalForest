export function monthConvert(month: string): string {
  let convert = "";
  switch (month) {
    case "January":
      convert = "1";
      break;
    case "February":
      convert = "2";
      break;
    case "March":
      convert = "3";
      break;
    case "April":
      convert = "4";
      break;
    case "May":
      convert = "5";
      break;
    case "June":
      convert = "6";
      break;
    case "July":
      convert = "7";
      break;
    case "August":
      convert = "8";
      break;
    case "September":
      convert = "9";
      break;
    case "October":
      convert = "10";
      break;
    case "November":
      convert = "11";
      break;
    case "December":
      convert = "12";
      break;
    default:
      console.log("Invalid month");
  }
  return convert;
}
