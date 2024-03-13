const locale = "pt";
const translations = {
    pt:{
        "system_maintance":"Manutenção",
        "system_subtitle":"O Ambiente está passando por manutenção",
        "system_indisponible_reason":"Este ambiente está indisponível no momento para a implementação de melhorias.",
        "system_restablishment":"Estamos trabalhando para resstabelecer o sistema bevemente."
    },
    en:{

    },
    es:{

    }
};

document.addEventListener("DOMContentLoaded", () => {
    document
    .querySelectorAll("[custom-data-locale-html]")
    .forEach(translateElement);
});

function translateElement(element) {
    const key = element.getAttribute("custom-data-locale-html");
    const translation = translations[locale][key];
    element.innerText = translation;
};