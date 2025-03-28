import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}"
                    data-name="${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}


document.addEventListener("click", 
    (theClicked) => {
        const itemClicked = theClicked.target
        if (itemClicked.dataset.type === "celebrity") {
            window.alert(`${itemClicked.dataset.name}'s sport is ${itemClicked.dataset.sport}`)
                }
            }
        )
        