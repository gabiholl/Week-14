class homePage{
    get welcomeText() {
        return $("#header_container > div.header_secondary_container > span");
    }
}

export default new homePage();
