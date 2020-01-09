import { getQueryString } from '../common'
export const TenantHideDirective = {
    inserted(el, binding) {
        let tn = getQueryString(location.href, "tn");
        let whiteList = {}.toString.call(binding.value) === "[object Array]" ? binding.value : [binding.value];
        if (whiteList.indexOf(tn) > -1) {
            el.style.display = "none";
            el.parentElement.removeChild(el);
        }
    }
}
// 根据指令动态修改DOM样式
export const TenantClassDirective = {
    inserted(el, binding) {
        let tn = getQueryString(location.href, "tn");
        let classList;
        classList = {}.toString.call(binding.value) === "[object Array]" ? binding.value : [binding.value];
        classList.forEach(item => {
            el.classList.add(`${item}`);
            tn && el.classList.add(`${item}-${tn}`);
        });
    }
}