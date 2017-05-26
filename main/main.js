// Write your cade below:
function caclRemaindar(a, b) {
    var c;
    c = a % b
    return c;
};

function caclSum(num) {
    var result = 0;
    for( var i=0; i<num.length ;i++)
    {
        result += num[i];
    }
    return result;
};

function caclSumInConditon(num,a) {
    var res = 0;
    for( var i = 0;i<num.length;i++)
    {
        if(num[i]<a) {
            res += num[i];
        }
    }
    return res;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}