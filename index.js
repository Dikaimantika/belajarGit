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
