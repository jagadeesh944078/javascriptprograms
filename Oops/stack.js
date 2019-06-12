var stack = function () {
    this.storage = {};
    this.size = 0;
}

stack.prototype.add = function (value) {
    this.storage[this.size++] = value;
};

stack.prototype.remove = function () {
    this.size && this.size--
    var result = this.storage[this.size];
    delete this.storage[this.size];
    return result;
};

stack.prototype.getSize = function () {
    return this.size;
};

stack.prototype.isEmpty = function () {
    return (this.storage == null);
};
module.exports= stack