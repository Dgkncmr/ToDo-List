const STORAGE_KEY = 'gorev-storage';

const app = new Vue({
    el: '#app',
    name: 'Yapılacaklar Listesi',
    data: {
        aktifGorev: {},
        gorevler: []
    },
    created() {
        this.gorevler = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    },
    methods: {
        gorevYeni() {
            this.aktifGorev = { is: '' };
            $('#gorevModal').modal('show');
        },
        gorevKaydet() {
            if (this.aktifGorev.is != undefined && this.aktifGorev.is != '') {
                if (this.aktifGorev.is > 0) {
                    let gorev = this.gorevler.find(x => x.is == this.aktifGorev.is);
                    gorev = aktifGorev;
                } else {
                    this.gorevler.push({
                        is: this.aktifGorev.is

                    });
                    this.aktifGorev = {};
                    $('#gorevModal').modal('hide');
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.gorevler));
                }
            }
        },
        gorevSil(index) {
            this.gorevler.splice(index, 1);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.gorevler));
        },
      
    },

})