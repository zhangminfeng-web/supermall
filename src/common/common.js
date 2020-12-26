/**
 * 防抖动函数
 * @param func  回调执行的防抖动方法
 * @param delay 防抖动的间隔时间
 * @returns {function(...[*]=)}
 */
export function debounce(func,delay){
    let timer = null;
    return function (...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this,args);
        },delay);
    }
}