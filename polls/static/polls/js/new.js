let csr = $("input[name=csrfmiddlewaretoken").val();
var finalEnglishToBanglaNumber = {

    অ: '1',
    আ: '2',
    'া': '2',
    ই: '3',
    'ি': '3',
    ঈ: '3',
    'ী': '3',
    উ: '4',
    'ু': '4',
    ঊ: '4',
    'ূ' : '4',
    ঋ: '4',
    'ৃ' : '4',
    এ: '5',
    'ে': '5',
    ঐ: '5',
    'ৈ': '5',
    ও: '6',
    'ো': '6',
    ঔ: '6',
    'ৌ': '6',
    ক: '7',
    খ: '8',
    গ: '9',
    ঘ: '10',
    ঙ: '10',
    চ: '11',
    ছ: '12',
    জ: '13',
    য: '13',
    ঝ: '14',
    ঞ: '14',
    ট: '15',
    ঠ: '16',
    ড: '17',
    ঢ: '18',
    ত: '19',
    ৎ: '19',
    থ: '20',
    দ: '21',
    ধ: '22',
    ন: '23',
    ণ: '23',
    প: '24',
    ফ: '25',
    ব: '26',
    ভ: '27',
    ম: '28',
    য়: '29',

    র: '30',
    '্': '30',
    ল: '31',
    শ: '32',
    ষ: '32',
    স: '32',
    হ: '33',
    ড়: '34',
    ঢ়: '34',
    'ং': '35',
    'ঃ': '36',
 };

function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str;
    } 

$("#convert-button").click(function(){
    let text = $("#exampleFormControlTextarea6").val();
    console.log(text);
    text = countWords(text);
    let words = text.split(' ');


    $("#table-maker").empty();
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var tblcptn = document.createElement("caption");
    var cellText = document.createTextNode("বাংলা অনুবাদ");
    tblcptn.setAttribute("class", "word-text");
    tblcptn.setAttribute("caption-side", "top");
    tblcptn.appendChild(cellText);  
    tbl.appendChild(tblcptn);
    /*
    var row = document.createElement("tr");
    var x = document.createElement("th");
    x.appendChild(document.createTextNode("Words"));
    row.appendChild(x);
    var x = document.createElement("th");                  
    x.appendChild(document.createTextNode("Corresponding image"));
    row.appendChild(x);
    tblBody.appendChild(row);
    */

    var baseURL = "http://127.0.0.1:8000/static/polls/bsl-image/";

    for (var x in words){
        console.log(words[x]);
        //make a word row table and show word
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        var cellText = document.createTextNode(words[x]);
        cell.setAttribute("class", "word-text");
        cell.appendChild(cellText);
        row.appendChild(cell);    

        for(var c in words[x]){
            // add image cell
            var character = words[x][c];
            var imageName = finalEnglishToBanglaNumber[character];

            if ( character in finalEnglishToBanglaNumber){
                var cell = document.createElement("td");
                var img = document.createElement('img');
                img.setAttribute("src", baseURL+imageName+".jpg");             
                img.setAttribute('class', 'zoom');
                var cellText = document.createTextNode(img);
                cell.appendChild(img);
                row.appendChild(cell);
            }
            else
            {
                
            }
            
        }
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
            // appends <table> into <body>
            tbl.setAttribute("border", "1");
    $("#table-maker").append(tbl);

});  