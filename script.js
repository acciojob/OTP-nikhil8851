const codes = document.querySelectorAll('.code');
        codes.forEach((code, index) => {
            code.addEventListener('input', () => {
                if (code.value.length === 1 && index < codes.length - 1) {
                    codes[index + 1].focus();
                }
            });
            code.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && code.value.length === 0 && index > 0) {
                    codes[index - 1].focus();
                }
            });
        });
() => { cy.visit(baseUrl + "/main.html"); 
 () => { cy.visit(baseUrl + "/main.html");
() => { cy.visit(baseUrl + "/main.html"); //always check this "visit" in your test case that it is set to - baseUrl + "/main.html" cy.get("#verification_heading").should("have.text", "Verify Your Account"); cy.get("#verification_subtext").should("exist"); cy.get(".code-container").find("input.code").eq(5).should("exist"); }