'use strict';

function AwesomeModuleDependency(type, name, alias, optional) {
  if (type !== this.TYPE_NAME && type !== this.TYPE_ABILITY) {
    throw new Error('AwesomeModuleDependency: type "' + type + '" is an unknown type');
  }
  this.type = type;

  if (!name || !name.length) {
    throw new Error('AwesomeModuleDependency: name "' + name + '" is invalid');
  }
  this.name = name;

  if (!alias || !alias.length) {
    throw new Error('AwesomeModuleDependency: alias "' + alias + '" is invalid');
  }
  this.alias = alias;

  this.optional = optional ? true : false;
}

AwesomeModuleDependency.prototype.TYPE_NAME = AwesomeModuleDependency.TYPE_NAME = 'NAME';
AwesomeModuleDependency.prototype.TYPE_ABILITY = AwesomeModuleDependency.TYPE_ABILITY = 'ABILITY';

module.exports = AwesomeModuleDependency;
