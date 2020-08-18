alert("uwu");

function Stack() {
    this.size = 0;
    this.data = [];

    this.pushStack = function (data) {
        var size = this.size++;
        this.data[size] = data;
        return this.data[size];
    }

    this.popStack = function () {
        var size = this.size, lastData;

        if (size) {
            lastData = this.data[size - 1];
            this.data.length = size - 1;
            this.size--;

            return lastData;
        } else {
            return false;
        }
    }

    this.allStack = function () {
        return this.data;
    }
};

function celciusToRandF(){
    var nilai = parseInt(document.getElementById("nilai").value);
    var satuanAkhir = document.getElementById("satuanAkhir").value;
    var result = 0;

    if(satuanAkhir == "r")
      result = nilai * 4/5 ;
    else if(satuanAkhir == "f")
      result = nilai * 9/5  + 32;
    
    console.log("Suhu "+result+" "+satuanAkhir);

}