var prime_num_storage = [2, 3, 5, 7];
var highest_prime_input_storage = 10;
var privious_prime_input_storage;
function primes() {
    var find_prime_from;
    var prime_num_count = 4;
    var prime_input = parseInt(document.getElementById("prime").value);
    if (prime_input <= 10) {
        var prime;
        if (prime_input == privious_prime_input_storage) {
            return;
        }
        privious_prime_input_storage = prime_input;
        switch (prime_input) {
            case 0:
                prime = "";
                prime_num_count = 0;
                break;
            case 1:
                prime = "";
                prime_num_count = 0;
                break;
            case 2:
                prime = "2";
                prime_num_count = 1;
                break;
            case 3:
                prime = "2 3";
                prime_num_count = 2;
                break;
            case 4:
                prime = "2 3";
                prime_num_count = 2;
                break;
            case 5:
                prime = "2 3 5";
                prime_num_count = 3;
                break;
            case 6:
                prime = "2 3 5";
                prime_num_count = 3;
                break;
            case 7:
                prime = "2 3 5 7";
                prime_num_count = 4;
                break;
            case 8:
                prime = "2 3 5 7";
                prime_num_count = 4;
                break;
            case 9:
                prime = "2 3 5 7";
                prime_num_count = 4;
                break;
            case 10:
                prime = "2 3 5 7";
                prime_num_count = 4;
                break;
            default:
                prime = "";
                prime_num_count = 0;
                break;
        }
        document.getElementById("prime_header").innerHTML =
            "<h3 id='total_primes'>" + "Total Primes:- " + prime_num_count + "</h3>";
        document.getElementById("prime_numbers").innerHTML = prime;
    }

    else if (prime_input > 10) {
        if (prime_input == highest_prime_input_storage && prime_input == privious_prime_input_storage) { return; }
        if (prime_input <= highest_prime_input_storage) {
            if (prime_input == privious_prime_input_storage) { return; }
            if (prime_input == highest_prime_input_storage) {
                privious_prime_input_storage = prime_input;
                document.getElementById("prime_header").innerHTML =
                    "<h3 id='total_primes'>" + "Total Primes:- " + prime_num_storage.length + "</h3>";
                document.getElementById("prime_numbers").innerHTML = prime_num_storage.join(" ");
                return;
            }
            var temporary_prime_num_string = "";
            privious_prime_input_storage = prime_input;
            var i;
            for (i = 0; i < prime_num_storage.length; i++) {
                if (prime_num_storage[i] <= prime_input) {
                    temporary_prime_num_string += prime_num_storage[i] + " ";
                } else { break; }
            }
            document.getElementById("prime_header").innerHTML =
                "<h3 id='total_primes'>" + "Total Primes:- " + i + "</h3>";
            document.getElementById("prime_numbers").innerHTML = temporary_prime_num_string;
        }
        if (prime_input > highest_prime_input_storage) {
            find_prime_from = highest_prime_input_storage + 1;
            var temporary_prime_array = [];
            var x = find_prime_from;
            while (x <= prime_input) {
                if (x % 2 != 0 && x % 3 != 0 && x % 5 != 0 && x % 7 != 0) {
                    prime_num_storage.push(x);
                    temporary_prime_array.push(x);
                    x++;
                    continue;
                }
                x++;
            }
            if (highest_prime_input_storage == 10 || privious_prime_input_storage < highest_prime_input_storage) {
                highest_prime_input_storage = prime_input;
                privious_prime_input_storage = prime_input;
                document.getElementById("prime_header").innerHTML =
                    "<h3 id='total_primes'>" + "Total Primes:- " + prime_num_storage.length + "</h3>";
                document.getElementById("prime_numbers").innerHTML = prime_num_storage.join(' ');

            }
            else {
                highest_prime_input_storage = prime_input;
                privious_prime_input_storage = prime_input;
                document.getElementById("total_primes").innerHTML = "Total Primes:- " + prime_num_storage.length;
                document.getElementById("prime_numbers").append(" " + temporary_prime_array.join(" "));
            }
        }
    }

    else if (prime_input != Number) {
        document.getElementById("prime_header").innerHTML =
            "<h3 id='total_primes' style='color:red;'>***Error***</h3>";
        document.getElementById("prime_numbers").innerHTML = "***please enter a Valid Number***";
        privious_prime_input_storage = null;
        alert("Invalid Input");
    }
}

function call_primes(event) {
    if (event.key == "Enter") { primes(); }
}

function calulate() {
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;
    var oprator = document.getElementById("option").value;

    if (oprator == "+") { var result = parseFloat(first) + parseFloat(second); }
    else if (oprator == "-") { var result = parseFloat(first) - parseFloat(second); }
    else if (oprator == "*") { var result = parseFloat(first) * parseFloat(second); }
    else if (oprator == "/") { var result = parseFloat(first) / parseFloat(second); }
    else if (oprator == "%") { var result = parseFloat(first) % parseFloat(second); }
    document.getElementById("result").value = result;
}

function footer() {
    var date = new Date();
    var month = date.getMonth();
    var today = date.getDate();
    var months_name =
        ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
    document.getElementsByTagName("year")[0].innerHTML = date.getFullYear();
    document.getElementsByTagName("today")[0].innerHTML =
        today + " " + months_name[month];
}

var total_images = 25;
var current_image = 0;
function image_change() {
    current_image++;
    var image_name = "images/" + current_image + ".jpg"
    document.getElementById("image").setAttribute("src", image_name);
    if (current_image == total_images) { current_image = 0; }
}

var color_list = ["#e6e6fa", "#000000", "#f0f8ff", "#b0e0e6", "#afeeee", "#98fb98", "#eee8aa", "#ffe4e1", "#ffe4b5", "#f5fffa", "#48d1cc", "#ffffe0", "#b0c4de", "#ffb6c1", "#d3d3d3", "#90ee90", "#fafad2", "#e0ffff", "#add8e6", "#fffacd", "#fff0f5", "#f0e68c", "#f0fff0", "#adff2f", "#ffd700", "#f8f8ff"];
var current_bg_color_value = 0;
function bg_color() {
    var color_value = color_list[current_bg_color_value]
    document.getElementsByTagName("body")[0].style.backgroundColor = color_value;
    current_bg_color_value++
    if (current_bg_color_value == color_list.length) { current_bg_color_value = 0; }
}

function cursor() {
    var screen_size = window.screen.width;
    if (screen_size > 900) {
        document.getElementById("pop-image").style.cursor = "pointer";
        document.getElementById("image").style.cursor = "pointer";
        document.getElementById("greet").style.cursor = "pointer";
    }
}

function greet() {
    var prompt_value = prompt("Your Name Please (max 10 character)", "").trim();
    if (prompt_value == null) {
        if (document.getElementsByClassName("greet_name")[0] == undefined) {
            prompt_value = "";
        }
        else { return; }
    }
    var greet_tag = "<span class='greet_name'><i><b>" + prompt_value.slice(0, 10) + "</i></b></span>";
    var greet = "<span onclick='greet()' id='greet' title='click to rename' style='cursor:default;'>" + "Namaste " + greet_tag + "</span>";
    document.getElementsByClassName("greet")[0].innerHTML = greet;
}
greet();