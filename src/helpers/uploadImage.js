import AWS from 'aws-sdk';
import {
  AWS_ACCESS_KEY, AWS_BUCKET_URL, AWS_REGION,
  AWS_S3_BUCKET, AWS_SECRET_KEY,
} from '../modules/environment';

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: AWS_S3_BUCKET },
  region: AWS_REGION,
});

const UploadImage = (file, setProgress, reset, dispatch) => {
  const params = {
    ACL: 'public-read',
    Body: file,
    Bucket: AWS_S3_BUCKET,
    Key: file.name,
  };

  myBucket
    .putObject(params)
    .on('httpUploadProgress', (evt) => {
      const progress = Math.round((evt.loaded * 100) / evt.total);
      setProgress(progress);
      if (progress === 100) {
        reset();
        dispatch();
      }
    })
    .send((err) => err);
};

const fileName = (file) => `${AWS_BUCKET_URL}/${AWS_S3_BUCKET}/${file.name}`;

export { UploadImage, fileName };
