export const dataForm = (obj: any) => {
  const formdata = new FormData();
  Object.keys(obj).forEach((el) => {
    if (el === 'image') {
      formdata.append('image', obj[el][0]);
    } else {
      formdata.append(el, obj[el]);
    }
  });
  return formdata;
};
