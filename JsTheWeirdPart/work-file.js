function Navigation(open){
  this.open = open;
}

Navigation.prototype.openFunction = function() {
  return this.classList.add('is-open')
}
