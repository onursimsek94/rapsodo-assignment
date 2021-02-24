/// <reference types="cypress" />

context('views/Login.js', () => {
  beforeEach(() => {
    cy.fixture('testdata.json').as('testdata')
    cy.visit('http://localhost:3000/login')
  })

  it('when user tries to log in with the correct credentials, success message should appear', function () {
    cy
      .intercept('POST', 'https://reqres.in/api/login')
      .as('login')

    cy
      .get('[data-testid=email-input-test]')
      .type(this.testdata.correct_email)
      .should('have.value', this.testdata.correct_email)

    cy
      .get('[data-testid=password-input-test]')
      .type(this.testdata.password)
      .should('have.value', this.testdata.password)

    cy
      .get('[data-testid=signin-button-test]')
      .click()

    cy.wait('@login')

    cy
      .get('.react-toast-notifications__toast--success .react-toast-notifications__toast__content')
      .contains(this.testdata.login_success_message)
  })

  it('when user tries to log in with the wrong credentials, error message should appear', function () {
    cy
      .intercept('POST', 'https://reqres.in/api/login')
      .as('login')

    cy
      .get('[data-testid=email-input-test]')
      .type(this.testdata.wrong_email)
      .should('have.value', this.testdata.wrong_email)

    cy
      .get('[data-testid=password-input-test]')
      .type(this.testdata.password)
      .should('have.value', this.testdata.password)

    cy
      .get('[data-testid=signin-button-test]')
      .click()

    cy.wait('@login')

    cy
      .get('.react-toast-notifications__toast--error .react-toast-notifications__toast__content')
      .contains(this.testdata.login_error_message)
  })

  it('when the user enters from the mobile phone, mobile-view agreements should appear', () => {
    cy.viewport('iphone-6')

    cy
      .get('.mobile-view')
      .should('be.visible')

    cy
      .get('.web-view')
      .should('not.be.visible')
  })

  it('when the user enters from the computer, web-view agreements should appear', () => {
    cy.viewport('macbook-13')

    cy
      .get('.mobile-view')
      .should('not.be.visible')

    cy
      .get('.web-view')
      .should('be.visible')
  })

  it('agreements should have the correct links', () => {
    cy.viewport('macbook-13')

    cy
      .get('.ra-agreements.web-view [data-testid=terms-of-use-link-test]')
      .should('have.attr', 'href', 'https://rapsodo.com/terms-of-use/')
      .and('have.attr', 'target', '_blank')

    cy
      .get('.ra-agreements.web-view [data-testid=privacy-policy-link-test]')
      .should('have.attr', 'href', 'https://rapsodo.com/privacy-policy/')
      .and('have.attr', 'target', '_blank')
  })

  it('when user clicks on the forgot password link, should be directed to the /forgot-password', () => {
    cy
      .get('[data-testid=forgot-password-button-test]')
      .click()

    cy
      .location('pathname')
      .should('include', '/forgot-password')
  })
})
