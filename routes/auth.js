var keyring= {
  amministratore: 'papero',
  general: 'dante194652'
};

exports.amministratore = function (){
  return function(request, response, next) {

    console.log(request.headers);

    if (request.headers.magicword === keyring['amministratore']) {

      next();
    } else {

      response.status(401).end();

    }

  };
};


exports.all = function (){
  return function(request, response, next) {

    console.log(request.headers.magicword);

    if (request.headers.magicword === keyring['general'] || request.headers.magicword === keyring['amministratore']) {

      next();
    } else {

      response.status(401).end();

    }

  };
};
