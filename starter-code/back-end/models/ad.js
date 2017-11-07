module.exports = (sequelize, Sequelize) => {
	return sequelize.define('ad', {
		headline: Sequelize.STRING,
		url: Sequelize.STRING
	});
};