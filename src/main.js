function buttonClicked(){

    //To call the variable and take input which will be inserted by user from index.html
    var uni_input = document.getElementById("uni_input").value
    var country_input = document.getElementById("country_input").value

    //fetching data from API based on variable and input of user
    //uni_input for type of uni data (Matrikulasi)
    //country_input for type of country data (e.g Japan)
    fetch(`http://universities.hipolabs.com/search?name=${uni_input}&country=${country_input}`)
    .then((response) => response.json())
    .then((data) => {
        var info = data
            console.log(info)

    //Choosing 5 random university
            var total = data.length  
                var random = [];
                for(var i = 0;i<total ; i++){
                    var temp = Math.floor(Math.random()*total);
                    if(random.indexOf(temp) == -1){
                        random.push(temp);
                    }
                    else
                    i--;
                }
               
    //Declare a variable for each data that has been taken in API array
        var uni1st = data[random[0]].name;
        var uni2nd = data[random[1]].name;
        var uni3rd = data[random[2]].name;
        var uni4th = data[random[3]].name;
        var uni5th = data[random[4]].name;

        var uniurl1st = data[random[0]].web_pages[0];
        var uniurl2nd = data[random[1]].web_pages[0];
        var uniurl3rd = data[random[2]].web_pages[0];
        var uniurl4th = data[random[3]].web_pages[0];
        var uniurl5th = data[random[4]].web_pages[0];

    //Output data on html based on their classes in index.html
        document.querySelector(".uni1st").innerText = uni1st;
        document.querySelector(".uni2nd").innerText = uni2nd;
        document.querySelector(".uni3rd").innerText = uni3rd;
        document.querySelector(".uni4th").innerText = uni4th;
        document.querySelector(".uni5th").innerText = uni5th;
        
        document.querySelector(".uniurl1st").innerText = uniurl1st;
        document.querySelector(".uniurl2nd").innerText = uniurl2nd;
        document.querySelector(".uniurl3rd").innerText = uniurl3rd;
        document.querySelector(".uniurl4th").innerText = uniurl4th;
        document.querySelector(".uniurl5th").innerText = uniurl5th;

        });
    }
        