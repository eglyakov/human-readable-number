module.exports = function toReadable (number) {
    let arrOrig = [];

    let arr = String(number).split('');

    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case '0':
                arr[i] = 'zero';
                arrOrig.push(0);
                break;
            case '1':
                arr[i] = 'one';
                arrOrig.push(1);
                break;
            case '2':
                arr[i] = 'two';
                arrOrig.push(2);
                break;
            case '3':
                arr[i] = 'three';
                arrOrig.push(3);
                break;
            case '4':
                arr[i] = 'four';
                arrOrig.push(4);
                break;
            case '5':
                arr[i] = 'five';
                arrOrig.push(5);
                break;
            case '6':
                arr[i] = 'six';
                arrOrig.push(6);
                break;
            case '7':
                arr[i] = 'seven';
                arrOrig.push(7);
                break;
            case '8':
                arr[i] = 'eight';
                arrOrig.push(8);
                break;
            case '9':
                arr[i] = 'nine';
                arrOrig.push(9);
                break;
        }
    }

    let n1 = '',
        n2 = '',
        n3 = '',
        res = '',
        text = '';

    switch (arr.length) {
        case 1:
            n3 = arr[0];
            break;
        case 2:
            n2 = arr[0];
            n3 = arr[1];
            break;
        case 3:
            n1 = arr[0];
            n2 = arr[1];
            n3 = arr[2];
            break;
                
    }   
    
    if (arr.length == 3) arrOrig.shift(0);

    if (arr.length == 1) text = n3;

    if (arr.length == 2 || arr.length == 3) {
        if (n2 == 'one' && n3 == 'zero') res = 'ten';
        else if (n2 == 'one' && n3 == 'one') res = 'eleven';
        else if (n2 == 'one' && n3 == 'two') res = 'twelve';
        else if (n2 == 'one' && n3 == 'three') res = 'thirteen';
        else if (n2 == 'one' && n3 == 'four') res = 'fourteen';
        else if (n2 == 'one' && n3 == 'five') res = 'fifteen';
        else if (arrOrig[0] == 1 && arrOrig[1] == 8) res = 'eighteen';
        else if (arrOrig[0] == 1 && arrOrig[1] >= 6 && arrOrig[1] <= 9) res = n3 + 'teen';

        else if (arrOrig[0] == 2 && arrOrig[1] == 0) res = 'twenty';
        else if (arrOrig[0] == 2 && arrOrig[1] != 0) res = 'twenty ' + n3;
        else if (arrOrig[0] == 3 && arrOrig[1] == 0) res = 'thirty';
        else if (arrOrig[0] == 3 && arrOrig[1] != 0) res = 'thirty ' + n3;
        else if (arrOrig[0] == 4 && arrOrig[1] == 0) res = 'forty';
        else if (arrOrig[0] == 4 && arrOrig[1] != 0) res = 'forty ' + n3;
        else if (arrOrig[0] == 5 && arrOrig[1] == 0) res = 'fifty';
        else if (arrOrig[0] == 5 && arrOrig[1] != 0) res = 'fifty ' + n3;

        else if (arrOrig[0] == 8 && arrOrig[1] == 0) res = n2 + 'y';
        else if (arrOrig[0] == 8 && arrOrig[1] != 0) res = n2 + 'y ' + n3;

        else if (arrOrig[0] >= 6 && arrOrig[1] == 0) res = n2 + 'ty';
        else if (arrOrig[0] >= 6 && arrOrig[1] != 0) {res = n2 + 'ty ' + n3};

        text = res;
    } 
 
    if (arr.length == 3) {
        if (arrOrig[0] == 0 && arrOrig[1] == 0) text = n1 + ' hundred';
        else if (arrOrig[0] == 0 && arrOrig[1] != 0) text = n1 + ' hundred ' + n3;
        else text = n1 + ' hundred ' + res;
    }

    return text; 
}
