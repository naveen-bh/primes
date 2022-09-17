// ******** THIS CODE IS ARCHIEVE CODE OF ORIGINAL CODE WITH COMMENTS. ORIGINAL CODE DOESN'T INCLUED COMMENTS.********
// ******** THIS JAVASCRIPT CODE IT FROM AN INDIVISUAL DEVELOPER AND THERE IS NO CPOPYRIGHT TO IT.********
// ******** (: SO YOU CAN USE IT FREELY :)********
// ******** AUTHOR: NAVEEN BHATI ********
// ******** DATE: 17-09-2022 ********
// ******** PUBLISHED ON : GitHub ********


// **global(gb) variables for prime funtion**
var prime_num_storage = [2, 3, 5, 7];    // list to store all prime numbers calulated by user given input. values will be apended as user input goes higher. pre filled with prime values  below 10 so further prime finding will start from 11 and appended in list after these value.
var highest_prime_input_storage = 10;    // gb variable to store highest input value user has entered so far. initial value will be 10.
var privious_prime_input_storage;        // gb variable to store the latest input value from user. will be used next time as privious input value to compare from user's latest input and then this value will be updated with user's latest value. 
// **function to calulate, store and display primes numbers.**
function primes() {
    var find_prime_from;        // variable to store a number from which primes numbers will be calulated upto the user input. value will be updated ahead. will be used to maximum 1 time everytime prime() function is called. 
    var prime_num_count = 4;    // variable to store total of prime numbers in between 0 to latest user input. initial value is 4 which is equal prime_num_storage list's initial length. 
    var prime_input = parseInt(document.getElementById("prime").value);    // variable to store the value of input box in which user has entered desired number . input box is identified with its id.
    // **if user input is <= 10 then according to this block of code, total numbers of primes and all primes will be displayed on the screen to user.**
    if (prime_input <= 10) {
        var prime;    // variable to store prime numbers upto 10 in a string.
        // **is user has entered the same value they entered priviously then this if statement will stop further funtion execution. initially this condition will be false as there is no privious value store in privious_prime_input_storage gb variable, so further execution will continue. after executing the rest of code this variable's value will be updated and next time on having same user input this if statment will do its work.**
        if (prime_input == privious_prime_input_storage) {
            return;
        }
        privious_prime_input_storage = prime_input;    // updating the privious_prime_input_storage value to latest input entered by user. as stated above if privious if-statement was not true then this this variable's value will be updated to the latest or current user input.
        // **switch statement to switch between different cases depending upon user input stored in prime_input variable.**
        switch (prime_input) {
            case 0:                     // switch to this case if prime_input value is 0.
                prime = "";             // all available prime number values will be nothing as there is no primes upto 0.  
                prime_num_count = 0;    // as there are no prime here so tolal number of primes will also be 0.
                break;
            case 1:                     // switch here if prime_input value is 1.
                prime = "";             // all available prime number values will be nothing as there is no primes upto 1.
                prime_num_count = 0;    // as there are no prime here so tolal number of primes will also be 0.
                break;
            case 2:                     // switch here if prime_input value is 2.
                prime = "2";            // all available prime number values will be (2) as there is only one prime upto 2. 
                prime_num_count = 1;    // as there is one prime here so tolal number of primes will be 1.
                break;
            case 3:                     // switch here if prime_input value is 3.
                prime = "2 3";          // all available prime number values will be (2 3) as there are two primes upto 3.
                prime_num_count = 2;    // as there are two primes here so tolal number of primes will be 2.
                break;
            case 4:                     // switch here if prime_input value is 4.
                prime = "2 3";          // all available prime number values will be (2 3) as there are two primes upto 4.
                prime_num_count = 2;    // as there are two primes here so tolal number of primes will be 2.
                break;
            case 5:                     // switch here if prime_input value is 5.
                prime = "2 3 5";        // all available prime number values will be (2 3 5) as there are three primes upto 5.
                prime_num_count = 3;    // as there are three primes here so tolal number of primes will  be 3.
                break;
            case 6:                     // switch here if prime_input value is 6.
                prime = "2 3 5";        // all available prime number values will be (2 3 5) as there are three primes upto 6.
                prime_num_count = 3;    // as there are three primes here so tolal number of primes will be 3.
                break;
            case 7:                     // switch here if prime_input value is 7.
                prime = "2 3 5 7";      // all available prime number values will be (2 3 5 7) as there are four primes upto 7.
                prime_num_count = 4;    // as there are foue primes here so tolal number of primes will be 4.
                break;
            case 8:                     // switch here if prime_input value is 8.
                prime = "2 3 5 7";      // all available prime number values will be (2 3 5 7) as there are four primes upto 8.
                prime_num_count = 4;    // as there are four primes here so tolal number of primes will be 4.
                break;
            case 9:                     // switch here if prime_input value is 9.
                prime = "2 3 5 7";      // all available prime number values will be (2 3 5 7) as there are four primes upto 9.
                prime_num_count = 4;    // as there are foue primes here so tolal number of primes will be 4.
                break;
            case 10:                    // switch here if prime_input value is 10.
                prime = "2 3 5 7";      // all available prime number values will be (2 3 5 7) as there are four primes upto 10.
                prime_num_count = 4;    // as there are four primes here so tolal number of primes will be 4.
                break;
            default:                    // if user input is bellow 0 or in negative numbers then this default code will run. 
                prime = "";             // as there is no primes below 0 so value will be nothing.
                prime_num_count = 0;    // total prime numbers will also be 0. 
                break;
        }
        // **after executing the switch statement calculated values will be inserted into desired location inside html docunemt, in this case it will be inserted into a dev element.**
        document.getElementById("prime_header").innerHTML =
            "<h3 id='total_primes'>" + "Total Primes:- " + prime_num_count + "</h3>";    // insert total prime number with <h3> tag. 
        document.getElementById("prime_numbers").innerHTML = prime;                      // insert all prime numbers in an element.
    }

    // **if user input is > 10 then according to this block of code, total numbers of primes and all primes will be displayed on the screen to user.**
    else if (prime_input > 10) {
        // **the first time user enters >10 input value, then bellow if-statement will be false and code ahead will run. after executing the rest code, highest input and privious input variables value will be updated to latest user input. after that if user enters the same input as they did just before or more specifically user input is same as value stored in highest_prime_input_storage and privious_prime_input_storage variables then bellow statement will become true and funtion will return.**
        if (prime_input == highest_prime_input_storage && prime_input == privious_prime_input_storage) { return; }
        // **if above statement does not run then either user as entered value first time above 10 or user has entered value which is higher or smaller than their privious entered highest value or user input is only equals to their highest enter input value but not equals to their privious entered vlaue. now in bellow if-statement if user enters the a input vlaue which is less than or equals to value stored in highest_prime_input_storage then bellow if statement will do its work.**
        if (prime_input <= highest_prime_input_storage) {
            // **after executing code so far we will check again if user input is equals to their priviously entered value. and if it is same then bellow if-statement will return from funtion. at first time this will not be true because intially either user input will be <10 or first greater than 10 vlaue so privious value will not match and code will run ahead. next time it may return depanding upon user input.**
            if (prime_input == privious_prime_input_storage) { return; }
            // **if user input is quals to their highest entered input value then below if-statment will do its work. we are checking this so we can directly display whole values of list stored in prime_num_storage variable without calculating vlaues from zero again. prime_num_storage contains all prime upto highest input of user. initially this will not be true because at first highest value is 10 by default as defined in gb variable but after updating highest input value this may be ture and then bellow code will run**
            if (prime_input == highest_prime_input_storage) {
                privious_prime_input_storage = prime_input;    // updating the privious_prime_input_storage variable's value to latest user input so next time we can check if user input is same as their privious one with this updated variable.
                // **after making all decision with user input its time to display actual prime numbers and total primes on screen.**
                document.getElementById("prime_header").innerHTML =
                    "<h3 id='total_primes'>" + "Total Primes:- " + prime_num_storage.length + "</h3>";     // first display the total primes upto the user input. since here we know that user input is equals to their highest entered input value and all primes upto highest value is stored in prime list, the total of all primes will be length of that list. so here we will display prime_num_storage list's length as toltal primes.
                document.getElementById("prime_numbers").innerHTML = prime_num_storage.join(" ");          // the actual values of prime will be displayed by joining the value of prime number list with space between each value. 
                return;                                                                                    // if current if-statement is ecexuted, the prime() function's work is finished so we will return from here.
            }
            // **if user input is not equals to their highest entered input vlaue and above code is not executed that means user input is less than highest value. and in this situation we will find prime values upto user give input form prime_num_storage list because that list contains all the prime values upto highest input**
            var temporary_prime_num_string = "";            // first declare a vriable as string to store all prime we will find from prime number list upto user input.
            privious_prime_input_storage = prime_input;     // as priviously we will update privious_prime_input_storage variable's value to latest or current user input so we can next time compair it form next user input.
            var i;
            // **now in below for loop we will find all the prime numbers upto user input. as these primes are already stored is prime number list, we can just iterate through all values in the list which are equals-to or less then user input.**
            for (i = 0; i < prime_num_storage.length; i++) {
                // **with below if-else statement we will grab prime value one by one which are less then or equals user input and store it inside predefined variable as string to use later. once iteration vlaue of list goes higher than input value than we will not store it and break the for loop.** 
                if (prime_num_storage[i] <= prime_input) {
                    temporary_prime_num_string += prime_num_storage[i] + " ";    // append the found prime number in string with space added. 
                } else { break; }                                                // once iteration prime value becomes larger than input vlaue than if will not run and else will break for loop. after this we will display gathered values to screen.
            }
            // **after finding all primes now diplaying total number of primes and all prime numbers.**
            document.getElementById("prime_header").innerHTML =
                "<h3 id='total_primes'>" + "Total Primes:- " + i + "</h3>";                     // as we find primes through iteration inside for loop, value of i variable will be equals to total number of prime number found so far because at last iteration in for loop i value will be equals to index of next prime number that is larger than input value and its index is equals to total values found so far in the list so will display this i variable's value as total number of prime.
            document.getElementById("prime_numbers").innerHTML = temporary_prime_num_string;    // as we are storing found prime numbers inside temporary_prime_num_string variable as a string now we will use it disply its value. 
        }
        // **if user input is higher than their highest entered input value then below if statment will do its work. initially highest input value is 10 by default because we defined it so at first time user enters a value that it higher than 10 than only this if statement will run and not the above one because any value user enters will be higher than 10 which is highest stored value. after first time execution of the below code highest input vlaue will be updated to latest user input and next time either above or this below if statement will be executed depanding upon user input.**
        if (prime_input > highest_prime_input_storage) {
            // **if this if-statemnet is executed then we will find prime from actual calculation. we will start calculating primes from next vlaue of highest_prime_input_storege because upto highest input value we would have already calulated prime numbers and we need to start next from that highest value and append primes to list. initially calculation will start from 11 because highest input vlaue is 10 by default. next time as values go higher calculation will start from highest value stored priviously. this saves time and processing power makes script faster.**
            find_prime_from = highest_prime_input_storage + 1;    // to start finding primes, store the vlaue 1 higher than highest input value to variable. we will start finding primes from here. 
            var temporary_prime_array = [];                       // along with storing prime numbers in prime_num_storage list permanently we will also store prime number in a temporary list. its use will be explained later. this list will only store the primes number which are will be calulated here means if prime number list contains all primes plus recently counted primes, this list will not contain priviously found primes but only recently found primes which are next value to pricious primes.
            var x = find_prime_from;                              // store find_prime_from value in x variable for easy write.
            // **now with below while loop we will contiue finding prime numbers until x reaches greater than input value.**
            while (x <= prime_input) {
                // **as we know prime numbers are those which are not divisible by (2, 3 ,5, 7) so with below if statement we will gather all values which are not divisible be 2,3,5,7 and these gathered values will be stored in list as these are the primes.**
                if (x % 2 != 0 && x % 3 != 0 && x % 5 != 0 && x % 7 != 0) {
                    prime_num_storage.push(x);        // after finding prime value, each value will be appended to prime number list as we move ahead.
                    temporary_prime_array.push(x);    // same above found prime will be appended into this temorary list. its use will be later expalined.
                    x++;                              // increase value of x to continue find primes.
                    continue;                         // continue to loop without moving forword.
                }
                x++;                                  // if above if-statement is not executed that means current vlaue of x is not prime so we will increase value of x from here as  vlaue of x was has not increased form above if statement.
            }
            // **below if-else statement is important to understand. as we are currently working on condition where user input is grater than their highest entered input value, there are two conditions posibile here. either user has entered value greater than 10 for the first time or the user has already entered a value which is stored in highest input value but after that input user may have entered a vlaue which is less than their highest entered input value. in either case we have to displey all prime number again which we may have already displayed because now we can't add only next calulated prime values on the screen since priviously displayed prime numbers no longer exist on the screen. but if this is not the case then we can just display additional founded prime numbers since priviously found primes already exists on screen. and we will do this inside next else statement.**
            if (highest_prime_input_storage == 10 || privious_prime_input_storage < highest_prime_input_storage) {
                highest_prime_input_storage = prime_input;     // if this is-statement is executed than highest_prime_input_storage vlaue will be updated to latest user input.
                privious_prime_input_storage = prime_input;    // same as above privious_prime_input_storage will be updated to latest input value.
                document.getElementById("prime_header").innerHTML =
                    "<h3 id='total_primes'>" + "Total Primes:- " + prime_num_storage.length + "</h3>";    // since all primes are now in prime_num_storage list, total number of primes will be this list's length. so this will be displayed.
                document.getElementById("prime_numbers").innerHTML = prime_num_storage.join(' ');         // all prime numbers will be displyed by joining the values of prime_num_storage list with space sepetrated.

            }
            // **as discribed in above if-statement, if above if-statement is not executed that means just before this user input user has not entered any vlaue smaller than their highest stored which meanes displayed values still exist on screen so this time we only need to display values calculted recenetly as all peivious values already on screen and this is where uor priviously defined list called temporary_prime_array will be usefull since this array or list only contains newely claculated primes vlaues so we can directly join next vlaue form this list without messing with our main prime_num_storage list.**
            else {
                highest_prime_input_storage = prime_input;     // since our current working input is higher than privious highest input, we will update it to latest input value.  
                privious_prime_input_storage = prime_input;    // same as above privious_prime_input_storage will also be updated to latest input as we will use it next time as a reference to privious input.
                document.getElementById("total_primes").innerHTML = "Total Primes:- " + prime_num_storage.length;    // since all prime numbers are inside prime nimber list total number of primes number will be equals to the length of this list.
                document.getElementById("prime_numbers").append(" " + temporary_prime_array.join(" "));              // as described above we will append the newly calulated prime numbers to oue document or screen. so we will do this by joining the temporary_prime_array with space seperated.
            }
        }
    }

    // **if user enters in input a NaN value or anything except valid number then this else statement will display will display an error message on screen*
    else if (prime_input != Number) {
        document.getElementById("prime_header").innerHTML =
            "<h3 id='total_primes' style='color:red;'>***Error***</h3>";
        document.getElementById("prime_numbers").innerHTML = "***please enter a Valid Number***";
        privious_prime_input_storage = null;    // since this time user has entered an invalid input so we will update privious_prime_input_storage variable's vlaue to null so next time when user enters a number then buy checking this privious value will display prime from zero rather than just appending since now there are no values on screen after which we can append next values.
        alert("Invalid Input");                 // we will also alert a message to user about invalid input.
    }
}

// **function call the above prime function after user press enter in input box. if user press button dedicated to input box we can directly call prime() function but if user presses enter after entring a value then we need to varify that key press and if it is enter key than this function will call above prime() function.**
function call_primes(event) {
    // **if pressed key is Enter than this if statement will call prime() function.**
    if (event.key == "Enter") { primes(); }
}

// **fuction to calculate any two numbers. possible operation are (+ - * / %).**
function calulate() {
    var first = document.getElementById("first").value;       // variable to store first input vlaue of user.
    var second = document.getElementById("second").value;     // variable to store second input vlaue of user.
    var oprator = document.getElementById("option").value;    // variable to store operation value user wants to perform on numbers that is stored in select element.
    // below if-else-if statement will calculate the numbers according to operation user wants to perform and will display it into ressult variable.   
    if (oprator == "+") { var result = parseFloat(first) + parseFloat(second); }
    else if (oprator == "-") { var result = parseFloat(first) - parseFloat(second); }
    else if (oprator == "*") { var result = parseFloat(first) * parseFloat(second); }
    else if (oprator == "/") { var result = parseFloat(first) / parseFloat(second); }
    else if (oprator == "%") { var result = parseFloat(first) % parseFloat(second); }
    document.getElementById("result").value = result;         // now the result will be displayed into desired element.
}

// **function to display the date, month and year on the website's footer.**
function footer() {
    var date = new Date();          // declare a new date variable to store date objec to get date, month and year.
    var month = date.getMonth();    // get the current month from date object.
    var today = date.getDate();     // get the current date from date object.
    var months_name =
        ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]    // store all months values in a list.
    document.getElementsByTagName("year")[0].innerHTML = date.getFullYear();    // get and dislplay current year in desired element.
    document.getElementsByTagName("today")[0].innerHTML =
        today + " " + months_name[month];    // find the actual month name from above list and display date and month in desired element.
}

// **global(gb) variables for image_change funtion**
var total_images = 25;    // this variable contains total number of images avaible in images folder of this website. update this vlaue if it is needed to add more images.
var current_image = 0;    // this variable stores the current value of currently displayed image on website. initially its value can be anything upto max number of images. later in function it will be updated. 
// **funtion to display and change image on website.**
function image_change() {
    // **this website has a funtionality to display image on top and change images with a tap on image. we will achieve it by changing src attr value of img element. for this function to work all images needs to be named like [1-n].jpg any other naming convention of images will be ignored.**
    current_image++;    // every time this funtion is called by tapping on image to change image. to do this we need to update image value. since all images will named as numbers, we will update current image value to one up and this will be used as prefix for updated image.
    var image_name = "images/" + current_image + ".jpg"                  // now we will store entire path of next image with its root directory + its name.extension and store it in image_name variable.
    document.getElementById("image").setAttribute("src", image_name);    // now we will update image element's src attribute value to our newly stored value in inahe_name variable. 
    // ** at one point we would have displayed all the images stored in our image directory next time we need to start from beginning. to do that current_image vlaue will be updated to 0 after its value reaches equals to total_image value. below if statement will do this.**
    if (current_image == total_images) { current_image = 0; }
}

// **global(gb) variables for bg_color funtion**
var color_list = ["#e6e6fa", "#000000", "#f0f8ff", "#b0e0e6", "#afeeee", "#98fb98", "#eee8aa", "#ffe4e1", "#ffe4b5", "#f5fffa", "#48d1cc", "#ffffe0", "#b0c4de", "#ffb6c1", "#d3d3d3", "#90ee90", "#fafad2", "#e0ffff", "#add8e6", "#fffacd", "#fff0f5", "#f0e68c", "#f0fff0", "#adff2f", "#ffd700", "#f8f8ff"];    // store some color value is hexadecimal format in a list. we can add more color directly as we need.
var current_bg_color_value = 0;    // this variable holds the index for the above color_list and we will use it to get color value form above list. initially its value can be anything upto the length of above list. later in funtion it will be updated. 
// **funtion to display and change background color of the website.**
function bg_color() {
    // **this website has a funtionality to change background color of website with a tap on an image as an icon which we are using to call this funtion. we will achieve it by changing backgroundColor property of body element. color value which we use are stored on color_list variable defined above.*
    var color_value = color_list[current_bg_color_value]                             // when this function is called we need to change color of background. we will get color value from prefined list of coler and which color will be displayed will be determined by passed index value. the value intitially will be same as defined above but later it will updated and next time the updated value will be used and new color will be displayed.
    document.getElementsByTagName("body")[0].style.backgroundColor = color_value;    // now this will change the backgroundColor style of body to the above stored value.
    current_bg_color_value++                                                         // after displaying the new color we need to update index value we are using to get color value from list so next by calling the function, new color will be applied.
    // ** at one point we would have applied all the color stored in our color_list variable. next time we need to start from beginning. to do that current_bg_color_value will be updated to 0 after its value reaches equals to length of color_list. below if statement will do this.**
    if (current_bg_color_value == color_list.length) { current_bg_color_value = 0; }
}

// **function to determine cursor value depanding on width of browser on diffenent devices.**
function cursor() {
    // **we need to make cursor pointer on event listining elements on wide screen like monitors and laptops. but this will make cursor pointer on small screen too and it will show an blue background on click events in small screens. to solve this we need to set cursor pointer only on large screen and default on small screen.**
    var screen_size = window.screen.width;    // first we need to check the width of window or browser. we will store it in screen_size variable.
    // **if screen size is larger than 900 px then we will turn cursor style to pointer otherwise if screen is smaller then cursor will be default.**
    if (screen_size > 900) {
        document.getElementById("pop-image").style.cursor = "pointer";
        document.getElementById("image").style.cursor = "pointer";
        document.getElementById("greet").style.cursor = "pointer";
    }
}

// **function to take name input form user via prompt and displayed it on top with greet.**
function greet() {
    var prompt_value = prompt("Your Name Please (max 10 character)", "");    // this will take input from user via prompt. we will only use first 10 character to display on top.
    // if user presses cancal at in prompt dialog then return value will be null. in this case we will display "null" on screen instead we will change prompt vlaue to empty string. 
    if (prompt_value == null) {
        // **this greet() function can be called by user eveytime user clicks on their name so they can change their name. so at first time if user has entered their name which is displayed on screen, next time if user clicks on name and click cancal on prompt dialog we don't want to remove user's name to empty string we want to change nothing on prompt cancaling. to do this since we know here user input is null so we just need to find is user has already entered their name. if they did then below if-else statemenet will either return from funtion to change nothing or if no privious name entered, we will displaye an empty string.**
        if (document.getElementsByClassName("greet_name")[0] == undefined) {
            prompt_value = "";
        }
        else { return; }
    }
    // **after getting user input we will trim it and slice to display only first 10 character. below three lines will do this and display name with greeting massage on screen.**
    var greet_tag = "<span class='greet_name'><i><b>" + prompt_value.trim().slice(0, 10) + "</i></b></span>";
    var greet = "<span onclick='greet()' id='greet' title='click to rename' style='cursor:default;'>" + "Namaste " + greet_tag + "</span>";
    document.getElementsByClassName("greet")[0].innerHTML = greet;
}
greet();    // calling the greet() function immediately after page load to take user name before complete page load.

// ********(: THAT IT END :)********