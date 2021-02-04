// setInterval(function(){ 
//     mParticle.logPageView(
//         "POSTM MEDIA TEST",
//         { page: window.location.pathname },
//         {"Google.Page": window.location.pathname,
//              "Google.Title": "The title of the page"}
//     );


//  }, 3000);





          

document.addEventListener("click", function(e){

    console.log(e.target.id)

    if(e.target.id === "test-header"){
        alert("Clicked")
    } 

    if(e.target.id === "SPA"){
        mParticle.logPageView(
            "POSTM MEDIA TEST",
            { page: window.location.pathname },
            {"Google.Page": window.location.pathname,
                 "Google.Title": "The title of the page"}
        );
    } 

    if(e.target.id === "Non-SPA"){
        mParticle.logPageView(
            "Post Media test Non SPA",
            {page: "Post Media test Non SPA"},
            {"Google.Page": window.location.pathname.toString(), "Google.Title": "NON-SPA"} // if you're using Google Analytics to track page views
        );
    } 

    if(e.target.id === "video-button"){
        mParticle.logEvent(
            'Video Watched',
            mParticle.EventType.Navigation,
            {'category':'Destination Intro','title':'Paris'}
          );
    

    }

    if(e.target.id === "MIXPANELall"){
        //custom event
        mParticle.logEvent( 'MIXPANEL CLIENT SIDE EVENT', mParticle.EventType.Other, {"custom-attr-client-side": "value-client-side"});

        //Screenview
        mParticle.logPageView(
                    "MIXPANEL-CLIENSIDE SCREENVIEW",
                    { page: window.location.pathname },
                    {"Google.Page": window.location.pathname,
                         "Google.Title": "The title of the page"}
                );


        //PURCHASE 

        // 1. Create the product
        var product1 = mParticle.eCommerce.createProduct(
            'Double Room - Econ Rate',  // Name
            'econ-1',                   // SKU
            100.00,                     // Price
            3,                           // Quantity
            "variant",
            "category",
            "brand",
            1,
            "coupon code"
        );

        var product2 = mParticle.eCommerce.createProduct(
            'Double Room - Econ Rate',
            'econ-1', 
            100.00, 
            4
        );

        // 2. Summarize the transaction
        var transactionAttributes = {
            Id: 'foo-transaction-id',
            Revenue: 430.00,
            Tax: 30
        };

        // 3. Log the purchase event (optional custom attributes an custom flags depending on your );
        var customAttributes = {"sale": true}; // if not passing any custom attributes, pass null
        var customFlags = {'Google.Category': 'travel'} // if not passing any custom flags, pass null
        mParticle.eCommerce.logProductAction(
            mParticle.ProductActionType.Purchase,
            [product1, product2],
            customAttributes,
            customFlags,
            transactionAttributes);
    };


    if(e.target.id === "MIXPANELEVENT"){
        //custom event
        mParticle.logEvent( 'MIXPANEL CLIENT SIDE EVENT', mParticle.EventType.Other, {"custom-attr-client-side": "value-client-side"});
    };

    if(e.target.id === "MIXPANELscreenview"){
            //Screenview
            mParticle.logPageView(
                "MIXPANEL-CLIENSIDE SCREENVIEW",
                { page: window.location.pathname },
                {"Google.Page": window.location.pathname,
                     "Google.Title": "The title of the page"}
            );
    };

    if(e.target.id === "MIXPANELpurchase"){
              //PURCHASE 

        // 1. Create the product
        var product1 = mParticle.eCommerce.createProduct(
            'Double Room - Econ Rate',  // Name
            'econ-1',                   // SKU
            100.00,                     // Price
            3,                           // Quantity
            "variant",
            "category",
            "brand",
            1,
            "coupon code"
        );

        var product2 = mParticle.eCommerce.createProduct(
            'Double Room - Econ Rate',
            'econ-1', 
            100.00, 
            4
        );

        // 2. Summarize the transaction
        var transactionAttributes = {
            Id: 'foo-transaction-id',
            Revenue: 430.00,
            Tax: 30
        };

        // 3. Log the purchase event (optional custom attributes an custom flags depending on your );
        var customAttributes = {"sale": true}; // if not passing any custom attributes, pass null
        var customFlags = {'Google.Category': 'travel'} // if not passing any custom flags, pass null
        mParticle.eCommerce.logProductAction(
            mParticle.ProductActionType.Purchase,
            [product1, product2],
            customAttributes,
            customFlags,
            transactionAttributes);
    };









        
            


    

    

    if(e.target.id === "ham-button"){

            // Old method// Old method// Old method// Old method// Old method// Old method// Old method// Old method// Old method// Old method// Old method// Old method

        // // 1. Create the product
        // const product1 = mParticle.eCommerce.createProduct(
        //     'Ham', 
        //     1, 
        //     100
        // );

        // // 2. Summarize the transaction
        // const transactionAttributes = {
        //     Id: 'foo-transaction-id',
        //     Revenue: 100.30,
        //     Tax: 30
        // };

        // // 3. Log the purchase event
        // mParticle.eCommerce.logProductAction(
        //     mParticle.ProductActionType.Purchase,
        //     [product1],
        //     transactionAttributes);

            ////New methiod///New methiod///New methiod///New methiod///New methiod///New methiod///New methiod///New methiod///New methiod///New methiod///New methiod///New methiod


                        // 1. Create the product
            var product1 = mParticle.eCommerce.createProduct(
                'Double Room - Econ Rate',  // Name
                'econ-1',                   // SKU
                100.00,                     // Price
                3                           // Quantity
            );

            var product2 = mParticle.eCommerce.createProduct(
                'Double Room - Econ Rate',
                'econ-1', 
                100.00, 
                4
            );

            // 2. Summarize the transaction
            var transactionAttributes = {
                Id: 'foo-transaction-id',
                Revenue: 430.00,
                Tax: 30
            };

            // 3. Log the purchase event (optional custom attributes an custom flags depending on your );
            var customAttributes = {sale: true}; // if not passing any custom attributes, pass null
            var customFlags = {'Google.Category': 'travel'} // if not passing any custom flags, pass null
            mParticle.eCommerce.logProductAction(
                mParticle.ProductActionType.Purchase,
                [product1, product2],
                customAttributes,
                customFlags,
                transactionAttributes);
        };





        if(e.target.id === "NBCU GA FWD Test"){
            let transactionId = Math.random()*10
            let revenue = Math.random()*100
            let shipping = 2.7
            let tax = 1.67

            const transactionAttributes = window.mParticle.eCommerce.createTransactionAttributes(
                transactionId,
                "",
                "",
                revenue,
                shipping,
                tax
            );

            for(let i = 0; i <= 50; i++){
                window.mParticle.eCommerce.logPurchase(
                    transactionAttributes,
                    [], //place holder for analytics products
                    true,
                    {} ///place holder for attrs
                );
                console.log(i)
            }

        }

    if(e.target.id === "logout") {
        mParticle.Identity.logout({}, null)
        localStorage.removeItem("customerid")
    }

    if(e.target.id === "ccpa-true"){
        let consentState = mParticle.Consent.createConsentState();
        let currentUser = mParticle.Identity.getCurrentUser()

        let ccpaConsentState = mParticle.Consent.createCCPAConsent(
            true, // true represents a "data sale opt-out", false represents the user declining a "data sale opt-out"
            Date.now(), // Timestamp
            "ccpa_agreement_v1", // Document
        );
            
        consentState.setCCPAConsentState(ccpaConsentState); // Note that *purpose* is not required here, unlike in GDPR above where it is required
        currentUser.setConsentState(consentState);
        console.log(currentUser.getConsentState().getCCPAConsentState())
    }

    if(e.target.id === "ccpa-false"){
        let user = mParticle.Identity.getCurrentUser()
        let consentState = user.getConsentState()
        consentState.removeCCPAConsentState() // Note that *purpose* is not required here, unlike in GDPR above where it is required
        user.setConsentState(consentState);
        console.log(user.getConsentState().getCCPAConsentState())
    }

    if(e.target.id === "housz-test"){
        mParticle.logEvent(
            'Houszz test',
            mParticle.EventType.Navigation,
            {'boolean': false, 'lowercasevalue':'lower'}
          );
    }

    if(e.target.id === "GDPR"){
        var user = mParticle.Identity.getCurrentUser()
        // Create consents for different purposes (in this case, location and parental consent purposes)
        var ad_targeting = mParticle.Consent.createGDPRConsent(
            true, // Consented
            Date.now(), // Timestamp
            "ad_targeting", // Document
            "17 Cherry Tree Lane", // Location
            "IDFA:a5d934n0-232f-4afc-2e9a-3832d95zc702" // Hardware ID
        );
        
        var personaliztion = mParticle.Consent.createGDPRConsent(
            true, // Consented
            Date.now(), // Timestamp
            "personaliztion", // Document
            "17 Cherry Tree Lane", // Location
            "IDFA:a5d934n0-232f-4afc-2e9a-3832d95zc702" // Hardware ID
        );
        
        // Add to your consent state
        var consentState = mParticle.Consent.createConsentState();
        consentState.addGDPRConsentState("ad_targeting", ad_targeting);
        consentState.addGDPRConsentState("personaliztion", personaliztion);
        user.setConsentState(consentState);
        console.log(user.getConsentState().getGDPRConsentState().ad_targeting, user.getConsentState().getGDPRConsentState().personaliztion)
        
    }

})

document.addEventListener("submit", function(e){
    e.preventDefault()
    let currentUser = mParticle.Identity.getCurrentUser()

    if(e.target.id === "update-form"){
        if(e.target[0].value.length >= 1 && e.target[1].value.length >= 1) {
            currentUser.setUserAttribute("first_name", e.target[0].value)
            currentUser.setUserAttribute("last_name", e.target[1].value);  
        } else {
            alert("first name or last name cannot be blank")
        };
        console.log(currentUser.getAllUserAttributes())
    }

    if(e.target.id === "login-form"){
        
            if(e.target[0].value.length >= 1){
                let identityRequest = {
                    userIdentities: {
                        customerid: e.target[0].value              
                    }
                };
                mParticle.Identity.login(identityRequest);
                localStorage.setItem('customerid', e.target[0].value);
            } else {
                alert("Form cant be blank")
            }

    }
})
