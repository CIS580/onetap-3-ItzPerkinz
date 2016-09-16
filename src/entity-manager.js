module.exports = exports = EntityManager;

function EntityManager(width, height, cellSize)
{
  this.worldWidth = width;
  this.worldHeight = height;
  this.cellSize = cellSize;
  this.widthInCells = Math.ceil(width/cellSize);
  this.heightInCells = Math.ceil(height/cellSize);
  this.numberOfCells = this.widthInCells*this.heightInCells;
  this.cells = [];
  for(var i=0; i<this.numberOfCells; i++)
  {
    this.cells[i]=i;
  }
}

EntityManager.prototype.addEntity = function(entity)
{
  var leftmost = Math.floor(entity.x / this.cellSize);
  var rightmost = Math.ceil((entity.x + width) / this.cellSize);
  var top = Math.floor(entity.y/this.cellSize);
  var bottom = Math.ceil((entity.y + height)/this.cellSize);
  for (var x=left; x<=right; x++){
    for (var y=top; y<=bottom; y++)
    {
      this.cells[y*this.widthInCells + x].push(entity);
      if(!entity.cells) entity.cells = [];
      entity.cells.push = [{x: x, y: y}];
    }
  }
}
