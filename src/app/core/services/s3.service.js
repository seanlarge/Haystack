(function () {
    'use strict';
    angular
        .module('app.core')
        .factory('S3', S3);


    /** @ngInject */
    function S3($log, api) {
        
        var S3 = this;

        var albumBucketName = 'haystack-image';
        var bucketRegion = 'us-east-1';
        var IdentityPoolId = 'us-east-1:03128f36-2e26-4d5a-aedc-42c4c96ef759';
        var aKey = 'AKIAI6UZDTGTWX5GOJCQ';

        AWS.config.update({
            region: bucketRegion,
            credentials: new AWS.CognitoIdentityCredentials({
                IdentityPoolId: IdentityPoolId
            })
        });

        var s3 = new AWS.S3({
            apiVersion: '2006-03-01',
            params: { Bucket: albumBucketName }
        });


        S3.upload = function (file, product) {
            console.log(trim(product.company_name + file.name));
            s3.upload({
                Key: trim(product.company_name + file.name),
                Body: file.file,
                ACL: 'public-read'
            }, function (err, data) {
                if (err) {
                    $log.error('There was an error uploading your photo: ', err.message);
                }
                $log.info('Successfully uploaded photo.');
                api.productsById.put({ id: product.id }, {product:{ image:'https://s3.amazonaws.com/haystack-image/' + trim(product.company_name + file.name) }},
                    function (success) {
                        $log.info(success);
                    },
                    function (error) {
                        $log.error(error);
                    })
            });
        };

        function trim(str){
            return str.replace(/ /g, '');
        }

        return S3;

    }

})();