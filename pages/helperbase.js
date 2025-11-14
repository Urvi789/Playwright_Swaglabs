class helperbase{
    constructor(page)
    {
        this.page = page;
        this.email = page.locator('#i0116');
        this.password = page.locator('#i0118');
        this.nextBtn = page.locator('.win-button >> text=Next');
        this.signIn = page.locator('.win-button >> text=Sign in');
        this.userProfile = page.locator('xpath=//div[@title="User Profile"]');
        this.logoutBtn = page.locator('xpath=//div[normalize-space()="Logout"]');
        this.aboutMeDesc = "As an accountant, I've helped my company manage and optimize its financial operations. My experience and education have enabled me to provide unparalleled insight into the company's fiscal performance, which worked to expand revenue by $560,000 in two years. My affinity for numbers, dedication and attention to detail can help me improve your company's financial performance and enhance your fiscal achievements. As an accountant, I've helped my company manage and optimize its financial operations. My experience and education have enabled me to provide unparalleled insight into the company's fiscal performance, which worked to expand revenue by $560,000 in two years. My affinity for numbers, dedication and attention to detail can help me improve your company's financial performance and enhance your fiscal achievements. As an accountant, I've helped my company manage and optimize its financial operations. My experience and education have enabled me to provide unparalleled insight into the company's fiscal performance, which worked to expand revenue by $560,000 in two years. My affinity for numbers, dedication and attention to detail can help me improve your company's financial performance and enhance your fiscal achievements.";
        this.uname= page.locator('#i0116');
        this.nextbtn = page.locator('#idSIButton9');
        this.pswd = page.locator('#i0118');
        this.loginbtn= page.locator('xpath = //input[@id="idSIButton9"]'); 
        this.profileimgbtn = page.locator ('xpath = //img[@alt="User Profile"]');
        this.logoutbtn=  page.getByRole("menuitem", {name: 'Logout'});
                         
    }
    async navigate(){
        
        await this.page.goto("https://parabank.parasoft.com/parabank/register.htm");
        
        
    }
    async loginTo_ParaBankWebsite(){
        await this.navigate();
         console.log("ParaBank website loaded.");
         await this.page.close();

    }

   

    async logout_ParaBankWebsite(){

    }
    
}
module.exports = {helperbase};
