import { getQueryString } from '../common'
export const TenantDirective = {
    inserted(el, binding) {
        let tn = getQueryString(location.href, "tn");
        let whiteList = {}.toString.call(binding.value) === "[object Array]" ? binding.value : [binding.value];
        if (whiteList.indexOf(tn) > -1) {
            el.style.display = "none";
            el.parentElement.removeChild(el);
        }
    }
}