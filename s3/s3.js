 const S3 = require('aws-sdk/clients/s3');
 const fs = require('fs');
 
 const region = "us-east-1";
 const accessKeyId = "AKIAVXRWKZNCAF56K3FB";
 const secretAccessKey = "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";
 const nameBucket= "crudlab9sm";


const storage = new S3({
    region,
    accessKeyId,
    secretAccessKey
})

const getBuckets = () => {
    return storage.listBuckets().promise();
}

const uploadToBucket = (file) => {
    const stream = fs.createReadStream(file.tempFilePath);
    const params = {
        Bucket:nameBucket,
        Key: file.name, 
        Body: stream 
    };
    return storage.upload(params).promise();
};

module.exports = {
    getBuckets,
    uploadToBucket
};