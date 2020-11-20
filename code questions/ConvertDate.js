// Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings. For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API. 

console.log("ConvertData log:")

function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    var theDate = new Date(userDate)
    let y = theDate.getFullYear().toString()
    let m = (theDate.getMonth()+1).toString()
    let d = theDate.getDate().toString()

    var parts= userDate.split('/')
    let yy = parts[2].toString()
    let mm = parts[0].toString()
    let dd = parts[1].toString()
    let output= (splitDate[2]+ splitDate[0]+splitDate[1]).toString();

    let stringPart = JSON.stringify(parts)
    let yyy = stringPart[2]
    let mmm = stringPart[0]
    let ddd = stringPart[1]

    return y+m+d
  }
  
  console.log(formatDate("12/30/2014"));
