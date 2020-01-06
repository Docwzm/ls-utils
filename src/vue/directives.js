import { getQueryString } from '../common'
export const tenantDirective = {
    inserted(el, binding) {
        let tenantId = getQueryString(location.href, "tn");
        let whiteList = {}.toString.call(binding.value) === "[object Array]" ? binding.value : [binding.value];
        if (whiteList.indexOf(tenantId) > -1) {
            el.style.display = "none";
            el.parentElement.removeChild(el);
        }
    }
}