const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab => {
    tabs.addEventListener('click',() => {
        const target = document.querySelector(tab.CDATA_SECTION_NODE.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove ('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove ('active')
        })
        tab.classList.add ('active')
        target.classList.add('active')
    })
})