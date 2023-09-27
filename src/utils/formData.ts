export const dataForm = (obj: any) => {
  const formdata = new FormData();
  Object.keys(obj).forEach((el) => {
    if (el === 'image') {
      formdata.append('image', obj[el][0]);
    } else if (el === 'images') {
      const files = obj[el];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        formdata.append(`img${i + 1}`, file);
      }
    } else {
      formdata.append(el, obj[el]);
    }
  });
  return formdata;
};
