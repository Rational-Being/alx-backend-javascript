import { uploadPhoto, createUser } from './utils';

export default function handleProjectSignup() {
  const up = uploadPhoto();
  const cr = createUser();

  return Promise.all([up, cr]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  }).catch(() => { console.log('Signup system offline'); });
}
