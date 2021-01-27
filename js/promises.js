// TODO: Lesson 1 - Korzystanie z Promise
let p = new Promise((resolve, reject) => {});

// Second param on then is Reject
p.then(
  (resp) => resp.json(),
  (error) => error.message
);

// TODO: Lesson 2 - Łączenie łańcuchowe
// When we have some errors inside then catch is catching them anyway
p.then((resp) => resp.json()).catch((err) => err.message);

// TODO: Lesson 3 - Metody statyczne Promise

Promise.resolve();
Promise.reject();

// TODO: Lesson 4 - Praca z wieloma promisami
// When one of promises would reject Promise will not resolve
Promise.all([fetch("https://google.pl"), fetch("https://eduweb.pl")]).then(
  (data) => {
    return data[0] && data[1];
  }
);

// Race will return that promise which will be faster
Promise.race([fetch("https://google.pl"), fetch("https://eduweb.pl")]).then(
  (resp) => {
    return resp.json();
  }
);

// Do these two promises but I will be waiting no longer than 10ms
Promise.race([fetch("https://google.pl"), timeout(10)]);
