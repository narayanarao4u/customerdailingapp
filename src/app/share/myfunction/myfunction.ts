export function SumArrayObjects(objArray:any[], prop:any ) {
    return objArray.reduce( function(a, b){
        return a + b[prop];
    }, 0);
}