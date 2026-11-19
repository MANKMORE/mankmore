

var rigret = false
var reverse = false


var risgravien_rigret = ["亜", "贝", "匚", "刀", "巳", "千", "气", "卄", "工", "丁", "开", "乙", "山", "冂", "ϴ", "卩", "口", "尺", "巛", "十", "凵", "人", "巫", "乂", "丫", "之", "𐌀", "𐌁", "𐌂", "𐌃", "𐌄", "𐌅", "𐌆", "𐌇", "𐌉", "Պ", "𐌊", "𐌋", "𐌌", "𐌍", "ბ", "𐌐", "𐌒", "𐌓", "𐌔", "𐌕", "𐌖", "Վ", "𐌗", "𐌘", "𐌙", "𐌚"]
var risgravien = ["亜", "贝", "匚", "刀", "巳", "千", "气", "卄", "工", "丁", "开", "乙", "山", "冂", "〇", "卩", "口", "尺", "巛", "十", "凵", "人", "巫", "乂", "丫", "之", "𐌀", "𐌁", "𐌂", "𐌃", "𐌄", "𐌅", "𐌆", "𐌇", "𐌉", "𐌊", "𐌋", "𐌌", "𐌍", "𐌎", "𐌏", "𐌐", "𐌒", "𐌓", "𐌔", "𐌕", "𐌖", "𐌗", "𐌘", "𐌙", "𐌚", "𐌛"]


var english = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function rigretify() {
    var rigret_swap = document.getElementById("rigret_swap")
    rigret = rigret_swap.checked
}

function reverseify() {
    var reverse_checkbox = document.getElementById("reverse")
    reverse = reverse_checkbox.checked
}


function translate(text) {
    var translated = ""
    var inp = document.getElementById("input")
    var out = document.getElementById("output")

    if (reverse) {
        for (const char of str) {
            console.log(char);
        }
    } else {
        // Normal translation logic
    }

}