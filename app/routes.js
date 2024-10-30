//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.get("/", function (request, response) {
  response.redirect('/en/index')
});

// Check UTRN for is valid
router.post('/en/prototype/v6/just-utrn-validated/invalid-utrn', function(request, response) {

    var utrn = request.session.data['utrn']
    if (utrn == "2702 1339 4877"){
        response.redirect("/en/prototype/v6/just-utrn-validated/amount")
    } else {
        response.redirect("/en/prototype/v6/just-utrn-validated/invalid-utrn")
    }
})

// Check UTRN is valid
router.post('/en/prototype/v6/show-amount/invalid-utrn', function(request, response) {

    var utrn = request.session.data['utrn']
    if (utrn == "2702 1339 4877"){
        response.redirect("/en/prototype/v6/show-amount/balance")
    } else {
        response.redirect("/en/prototype/v6/show-amount/invalid-utrn")
    }
})

// Check UTRN has permission for time to pay
router.post('/en/direct-debit/v1/no-permission', function(request, response) {

    var utrn = request.session.data['utrn']
    if (utrn == "2702 1339 4877"){
        response.redirect("/en/direct-debit/v1/postcode")
    } else {
        response.redirect("/en/direct-debit/v1/no-permission")
    }
})
