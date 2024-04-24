import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise])
    .then((value) => {
      const result = [];
      value.forEach((element) => {
        if (element.status === 'fulfulied') {
          result.push({ status: element.status, value: element.value });
        } else {
          result.push({ staus: element.status, value: `${element.reason}` });
        }
      });
      return result;
    });
}
