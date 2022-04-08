CREATE DATABASE IF NOT EXISTS `stardew`;
/*DROP DATABASE IF EXISTS `stardew`;*/
USE `stardew`;

CREATE TABLE `user_info` (
`User_ID` INT(5),
`Firstname` VARCHAR(15),
`Lastname` VARCHAR(5),
`Birthdate` DATE,
`User_mail` VARCHAR(30),
`Password` VARCHAR(10));

CREATE TABLE `login`(
`Log_ID` INT(5),
`username` VARCHAR(30),
`password` INT(10));

CREATE TABLE `information`(
`Info_ID` INT(5),
`Searchname` VARCHAR(50));

CREATE TABLE `full_information`(
`Full_ID` INT(5),
`Sname` VARCHAR(20),
`NPC_name` VARCHAR(20),
`NPC_season` VARCHAR(10),
`NPC_bd` INT(2),
`NPC_home` VARCHAR(20),
`NPC_gender` VARCHAR(6),
`NPC_status` VARCHAR(20),
`Bun_room` VARCHAR(50),
`Bun_reward` VARCHAR(50),
`Bun_bundle` VARCHAR(50),
`Map_loc` VARCHAR(20),
`Map_place` VARCHAR(20));

CREATE TABLE `skills` (
`S_ID` INT(5),
`Sname` VARCHAR(20));

CREATE TABLE `NPC` (
`NPC_ID` INT(5),
`NPC_name` VARCHAR(20),
`NPC_season` VARCHAR(10),
`NPC_bd` INT(2),
`NPC_home` VARCHAR(20),
`NPC_gender` VARCHAR(6),
`NPC_status` VARCHAR(20));

CREATE TABLE `Bundles` (
`Bun_ID` INT(5),
`Bun_room` VARCHAR(50),
`Bun_reward` VARCHAR(50),
`Bun_bundle` VARCHAR(50));

CREATE TABLE `Map` (
`Map_ID` INT(5),
`Map_loc` VARCHAR(20),
`Map_place` VARCHAR(20));

INSERT INTO `user_info` (`User_ID`, `Firstname`, `Lastname`, `Birthdate`, `User_mail`, `Password`)
   VALUES ('1', 'Thanawan', 'Lh.', '2001-04-02', 'gachasaltXP', '51523'),
   ('2', 'Sirawipa', 'Ph.', '2001-04-14', 'ruletheworld', '69696'),
   ('3', 'Sirada', 'Vi.', '2001-02-18', 'givemeaMoney', '18201'),
   ('4', 'Supitsara', 'Sa.', '2000-09-16', 'OhMyGod', '16900'),
   ('5', 'Paula', 'Sc.', '1998-12-05', 'Papapual', '51298'),
   ('6', 'Anastasia', 'Ma.', '1990-01-01', 'SleepyzZ', '15642'),
   ('7', 'Layla', 'Ar.', '1984-08-29', 'Helpmepls', '84256'),
   ('8', 'Daniel', 'Jr.', '2000-10-15', 'GenaratorGuy', '49835'),
   ('9', 'Alexander', 'Os.', '1997-08-04', 'ImnotAlex', '15465'),
   ('10', 'William', 'Na.', '1995-09-19', 'SaltOcean', '82594');
   
INSERT INTO `login`(`Log_ID`, `username`, `password`)
	VALUES ('1', 'gachasaltXP', '51523'),
    ('2', 'ruletheworld', '69696'),
    ('3', 'givemeaMoney', '18201'),
    ('4', 'OhMyGod', '16900');
    
INSERT INTO `information` (`Info_ID`, `Searchname`)
	VALUES ('1', 'Combat'),
    ('2', 'Farming'),
    ('3', 'Fishing'),
    ('4', 'Foraging'),
    ('5', 'Mining'),
    
    ('6', 'Alex'),
    ('7', 'Elliott'),
    ('8', 'Harvey'),
    ('9', 'Sam'),
    ('10', 'Sebastian'),
    ('11', 'Abigail'),
    ('12', 'Emily'),
    ('13', 'Haley'),
    ('14', 'Leah'),
    ('15', 'Maru'),
    ('16', 'Penny'),
    
    ('17', 'Caroline'),
    ('18', 'Clint'),
    ('19', 'Demetrius'),
    ('20', 'Evelyn'),
    ('21', 'George'),
    ('22', 'Gus'),
    ('23', 'Jas'),
    ('24', 'Jodi'),
    ('25', 'Kent'),
    ('26', 'Lewis'),
    ('27', 'Linus'),
    ('28', 'Marnie'),
    ('29', 'Pam'),
    ('30', 'Pierre'),
    ('31', 'Robin'),
    ('32', 'Sandy'),
    ('33', 'Vincent'),
    ('34', 'Willy'),
    ('35', 'Wizard'),
    
    ('36', 'Bouncer'),
    ('37', 'Gill'),
    ('38', 'Governor'),
    ('39', 'Grandpa'),
    ('40', 'Gunther'),
    ('41', 'Henchman'),
    ('42', 'Marlon'),
    ('43', 'Morris'),
    ('44', 'Mr. Qi'),
    
    ('45', 'Crafts Room'),
    ('46', 'Pantry'),
    ('47', 'Fish Tank'),
    ('48', 'Boiler Room'),
    ('49', 'Bulletin Board'),
    ('50', 'Vault'),
    
    ('51', 'Pelican Town'),
    ('52', 'The Beach'),
    ('53', 'Cindersap Forest'),
    ('54', 'The Desert'),
    ('55', 'The Mountain');
    
INSERT INTO `full_information` (`Full_ID`, `Sname`, `NPC_name`, `NPC_season`, `NPC_bd`, `NPC_home`, `NPC_gender`, `NPC_status`, `Bun_room`, `Bun_reward`, `Bun_bundle`, `Map_loc`, `Map_place`)
	VALUES ('1', 'Combat', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
    ('2', 'Farming', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
    ('3', 'Fishing', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
    ('4', 'Foraging', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
    ('5', 'Mining', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
    
    ('6', NULL, 'Alex', 'Summer', '13', 'Pelican Town', 'Male', 'Marriage', NULL, NULL, NULL, NULL, NULL),
    ('7', NULL, 'Elliott', 'Fall', '5', 'The Beach', 'Male', 'Marriage', NULL, NULL, NULL, NULL, NULL),
    ('8', NULL, 'Harvey', 'Winter', '14', 'Pelican Town', 'Male', 'Marriage', NULL, NULL, NULL, NULL, NULL),
	('9', NULL, 'Sam', 'Summer', '17', 'Pelican Town', 'Male', 'Marriage', NULL, NULL, NULL, NULL, NULL),
	('10', NULL, 'Sebastian', 'Winter', '10', 'Pelican Town', 'Male', 'Marriage', NULL, NULL, NULL, NULL, NULL),
	('11', NULL, 'Abigail', 'Fall', '13', 'Pelican Town', 'Female', 'Marriage', NULL, NULL, NULL, NULL, NULL),
	('12', NULL, 'Emily', 'Spring', '27', 'Pelican Town', 'Female', 'Marriage', NULL, NULL, NULL, NULL, NULL),
    ('13', NULL, 'Haley', 'Spring', '14', 'Pelican Town', 'Female', 'Marriage', NULL, NULL, NULL, NULL, NULL),
    ('14', NULL, 'Leah', 'Winter', '23', 'Cindersap Forest', 'Female', 'Marriage', NULL, NULL, NULL, NULL, NULL),
    ('15', NULL, 'Maru', 'Summer', '10', 'The Mountain', 'Female', 'Marriage', NULL, NULL, NULL, NULL, NULL),
    ('16', NULL, 'Penny', 'Fall', '2', 'Pelican Town', 'Female', 'Marriage', NULL, NULL, NULL, NULL, NULL),
    
    ('17', NULL, 'Caroline', 'Winter', '7', 'Pelican Town', 'Female', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('18', NULL, 'Clint', 'Winter', '26', 'Pelican Town', 'male', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('19', NULL, 'Demetrius', 'Summer', '19', 'The Mountain', 'Female', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('20', NULL, 'Evelyn', 'Winter', '20', 'Pelican Town', 'Female', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('21', NULL, 'George', 'Fall', '24', 'Pelican Town', 'Male', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('22', NULL, 'Gus', 'Summer', '8', 'Pelican Town', 'Male', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('23', NULL, 'Jas', 'Summer', '4', 'Cindersap Forest', 'Female', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('24', NULL, 'Jodi', 'Fall', '11', 'Pelican Town', 'Female', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('25', NULL, 'Kent', 'Spring', '4', 'Pelican Town', 'Male', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('26', NULL, 'Lewis', 'Spring', '7', 'Pelican Town', 'Male', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('27', NULL, 'Linus', 'Winter', '3', 'The Mountain', 'Male', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('28', NULL, 'Marnie', 'Fall', '18', 'Cindersap Forest', 'Female', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('29', NULL, 'Pam', 'Spring', '18', 'Pelican Town', 'Female', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('30', NULL, 'Pierre', 'Spring', '26', 'Pelican Town', 'Male', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('31', NULL, 'Robin', 'Fall', '21', 'The Mountain', 'Female', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('32', NULL, 'Sandy', 'Fall', '15', 'The Desert', 'Female', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('33', NULL, 'Vincent', 'Spring', '10', 'Pelican Town', 'Male', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('34', NULL, 'Willy', 'Summer', '24', 'The Beach', 'Male', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    ('35', NULL, 'Wizard', 'Winter', '17', 'Cindersap Forest', 'Male', 'Non-marriage', NULL, NULL, NULL, NULL, NULL),
    
    ('36', NULL, 'Bouncer', NULL, NULL, 'The Desert', 'Male', NULL, NULL, NULL, NULL, NULL, NULL),
    ('37', NULL, 'Gill', NULL, NULL,'The Mountain', 'Male', NULL, NULL, NULL, NULL, NULL, NULL),
    ('38', NULL, 'Governor', NULL, NULL, NULL, 'Male', NULL, NULL, NULL, NULL, NULL, NULL),
    ('39', NULL, 'Grandpa', NULL, NULL, 'Afterlife', 'Male', NULL, NULL, NULL, NULL, NULL, NULL),
    ('40', NULL, 'Gunther', NULL, NULL, 'Pelican Town', 'Male', NULL, NULL, NULL, NULL, NULL, NULL),
    ('41', NULL, 'Henchman', NULL, NULL, 'Witchs Swamp', 'Male', NULL, NULL, NULL, NULL, NULL, NULL),
    ('42', NULL, 'Marlon', NULL, NULL, 'The Mountain', 'Male', NULL, NULL, NULL, NULL, NULL, NULL),
    ('43', NULL, 'Morris', NULL, NULL, 'Pelican Town', 'Male', NULL, NULL, NULL, NULL, NULL, NULL),
    ('44', NULL, 'Mr. Qi', NULL, NULL, 'The Calico Desert', 'Male', NULL, NULL, NULL, NULL, NULL, NULL),
    
    ('45', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Crafts Room', 'Bridge Repair', 'Spring Foraging Bundle', NULL, NULL),
    ('46', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Crafts Room', 'Bridge Repair', 'Summer Foraging Bundle', NULL, NULL),
    ('47', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Crafts Room', 'Bridge Repair', 'Fall Foraging Bundle', NULL, NULL),
    ('48', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Crafts Room', 'Bridge Repair', 'Winter Foraging Bundle', NULL, NULL),
    ('49', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Crafts Room', 'Bridge Repair', 'Construction Bundle', NULL, NULL),
    ('50', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Crafts Room', 'Bridge Repair', 'Exotic Foraging Bundle', NULL, NULL),
    
	('51', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pantry', 'Greenhouse', 'Spring Crops Bundle', NULL, NULL),
    ('52', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pantry', 'Greenhouse', 'Summer Crops Bundle', NULL, NULL),
	('53', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pantry', 'Greenhouse', 'Fall Crops Bundle', NULL, NULL),
    ('54', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pantry', 'Greenhouse', 'Quality Crops Bundle', NULL, NULL),
    ('55', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pantry', 'Greenhouse', 'Animal Bundle', NULL, NULL),
    ('56', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pantry', 'Greenhouse', 'Artisan Bundle', NULL, NULL),
    
	('57', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Fish Tank', 'Glittering Boulder Removed', 'River Fish Bundle', NULL, NULL),
    ('58', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Fish Tank', 'Glittering Boulder Removed', 'Lake Fish Bundle', NULL, NULL),
    ('59', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Fish Tank', 'Glittering Boulder Removed', 'Ocean Fish Bundle', NULL, NULL),
    ('60', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Fish Tank', 'Glittering Boulder Removed', 'Night Fishing Bundle', NULL, NULL),
    ('61', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Fish Tank', 'Glittering Boulder Removed', 'Crab Pot Bundle', NULL, NULL),
    ('62', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Fish Tank', 'Glittering Boulder Removed', 'Specialty Fish Bundle', NULL, NULL),
    
	('63', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Boiler Room', 'Minecarts Repaired', 'Minecarts Repaired', NULL, NULL),
	('64', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Boiler Room', 'Minecarts Repaired', 'Geologists Bundle', NULL, NULL),
	('65', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Boiler Room', 'Minecarts Repaired', 'Adventurers Bundle', NULL, NULL),

	('66', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Bulletin Board', 'Friendship', 'Chefs Bundle', NULL, NULL),
    ('67', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Bulletin Board', 'Friendship', 'Dye Bundle', NULL, NULL),
    ('68', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Bulletin Board', 'Friendship', 'Field Research Bundle', NULL, NULL),
    ('69', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Bulletin Board', 'Friendship', 'Fodder Bundle', NULL, NULL),
    ('70', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Bulletin Board', 'Friendship', 'Enchanters Bundle', NULL, NULL),
    
	('71', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Vault', 'Bus Repair', '2,500 Bundle', NULL, NULL),
    ('72', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Vault', 'Bus Repair', '5,000 Bundle', NULL, NULL),
    ('73', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Vault', 'Bus Repair', '10,000 Bundle', NULL, NULL),
    ('74', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Vault', 'Bus Repair', '25,000 Bundle', NULL, NULL),
    
    ('75', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pelican Town', 'Blacksmith'),
    ('76', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pelican Town', 'Community Center'),
    ('77', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pelican Town', 'Harveys Clinic'),
    ('78', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pelican Town', 'JojaMart'),
    ('79', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pelican Town', 'Mayors Manor'),
    ('80', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pelican Town', 'Museum'),
    ('81', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pelican Town', 'Pierres'),
    ('82', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pelican Town', 'The Saloon'),
    ('83', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pelican Town', 'The Sewers'),
    ('84', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pelican Town', 'Trailer'),
    
    ('85', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'The Beach', 'Elliotts Cabin'),
    ('86', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'The Beach', 'Fish Shop'),

	('87', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Cindersap Forest', 'Abandoned House'),
    ('88', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Cindersap Forest', 'Marnies Ranch'),
    ('89', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Cindersap Forest', 'Secret Woods'),
    ('90', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Cindersap Forest', 'Traveling Cart'),
    ('91', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Cindersap Forest', 'Wizards Tower'),
    
    ('92', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'The Desert', 'Casino'),
    ('93', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'The Desert', 'Oasis'),
    ('94', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'The Desert', 'Skull Cavern'),

    ('95', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'The Mountain', 'Adventurers Guild'),
    ('96', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'The Mountain', 'Carpenters Shop'),
    ('97', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'The Mountain', 'The Mines'),
    ('98', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'The Mountain', 'Quarry'),
    ('99', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'The Mountain', 'Railroad'),
    ('100', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'The Mountain', 'Spa');


   
INSERT INTO `skills` (`S_ID`, `Sname`)
	VALUES ('1', 'Combat'),
    ('2', 'Farming'),
    ('3', 'Fishing'),
    ('4', 'Foraging'),
    ('5', 'Mining');
    
INSERT INTO `NPC` (`NPC_ID`, `NPC_name`, `NPC_season`, `NPC_bd`, `NPC_home`, `NPC_gender`, `NPC_status`)
	VALUES ('1', 'Alex', 'Summer', '13', 'Pelican Town', 'Male', 'Marriage'),
    ('2', 'Elliott', 'Fall', '5', 'The Beach', 'Male', 'Marriage'),
    ('3', 'Harvey', 'Winter', '14', 'Pelican Town', 'Male', 'Marriage'),
	('4', 'Sam', 'Summer', '17', 'Pelican Town', 'Male', 'Marriage'),
	('5', 'Sebastian', 'Winter', '10', 'Pelican Town', 'Male', 'Marriage'),
	('6', 'Abigail', 'Fall', '13', 'Pelican Town', 'Female', 'Marriage'),
	('7', 'Emily', 'Spring', '27', 'Pelican Town', 'Female', 'Marriage'),
    ('8', 'Haley', 'Spring', '14', 'Pelican Town', 'Female', 'Marriage'),
    ('9', 'Leah', 'Winter', '23', 'Cindersap Forest', 'Female', 'Marriage'),
    ('10', 'Maru', 'Summer', '10', 'The Mountain', 'Female', 'Marriage'),
    ('11', 'Penny', 'Fall', '2', 'Pelican Town', 'Female', 'Marriage'),
    
    ('12', 'Caroline', 'Winter', '7', 'Pelican Town', 'Female', 'Non-marriage'),
    ('13', 'Clint', 'Winter', '26', 'Pelican Town', 'male', 'Non-marriage'),
    ('14', 'Demetrius', 'Summer', '19', 'The Mountain', 'Female', 'Non-marriage'),
    ('15', 'Evelyn', 'Winter', '20', 'Pelican Town', 'Female', 'Non-marriage'),
    ('16', 'George', 'Fall', '24', 'Pelican Town', 'Male', 'Non-marriage'),
    ('17', 'Gus', 'Summer', '8', 'Pelican Town', 'Male', 'Non-marriage'),
    ('18', 'Jas', 'Summer', '4', 'Cindersap Forest', 'Female', 'Non-marriage'),
    ('19', 'Jodi', 'Fall', '11', 'Pelican Town', 'Female', 'Non-marriage'),
    ('20', 'Kent', 'Spring', '4', 'Pelican Town', 'Male', 'Non-marriage'),
    ('21', 'Lewis', 'Spring', '7', 'Pelican Town', 'Male', 'Non-marriage'),
    ('22', 'Linus', 'Winter', '3', 'The Mountain', 'Male', 'Non-marriage'),
    ('23', 'Marnie', 'Fall', '18', 'Cindersap Forest', 'Female', 'Non-marriage'),
    ('24', 'Pam', 'Spring', '18', 'Pelican Town', 'Female', 'Non-marriage'),
    ('25', 'Pierre', 'Spring', '26', 'Pelican Town', 'Male', 'Non-marriage'),
    ('26', 'Robin', 'Fall', '21', 'The Mountain', 'Female', 'Non-marriage'),
    ('27', 'Sandy', 'Fall', '15', 'The Desert', 'Female', 'Non-marriage'),
    ('28', 'Vincent', 'Spring', '10', 'Pelican Town', 'Male', 'Non-marriage'),
    ('29', 'Willy', 'Summer', '24', 'The Beach', 'Male', 'Non-marriage'),
    ('30', 'Wizard', 'Winter', '17', 'Cindersap Forest', 'Male', 'Non-marriage'),
    
    ('31', 'Bouncer', NULL, NULL, 'The Desert', 'Male', NULL),
    ('32', 'Gill', NULL, NULL,'The Mountain', 'Male', NULL),
    ('33', 'Governor', NULL, NULL, NULL, 'Male', NULL),
    ('34', 'Grandpa', NULL, NULL, 'Afterlife', 'Male', NULL),
    ('35', 'Gunther', NULL, NULL, 'Pelican Town', 'Male', NULL),
    ('36', 'Henchman', NULL, NULL, 'Witchs Swamp', 'Male', NULL),
    ('37', 'Marlon', NULL, NULL, 'The Mountain', 'Male', NULL),
    ('38', 'Morris', NULL, NULL, 'Pelican Town', 'Male', NULL),
    ('39', 'Mr. Qi', NULL, NULL, 'The Calico Desert', 'Male', NULL);
    
INSERT INTO `Bundles` (`Bun_ID`, `Bun_room`, `Bun_reward`, `Bun_bundle`)
	VALUES('1', 'Crafts Room', 'Bridge Repair', 'Spring Foraging Bundle'),
    ('2', 'Crafts Room', 'Bridge Repair', 'Summer Foraging Bundle'),
    ('3', 'Crafts Room', 'Bridge Repair', 'Fall Foraging Bundle'),
    ('4', 'Crafts Room', 'Bridge Repair', 'Winter Foraging Bundle'),
    ('5', 'Crafts Room', 'Bridge Repair', 'Construction Bundle'),
    ('6', 'Crafts Room', 'Bridge Repair', 'Exotic Foraging Bundle'),
    
    ('7', 'Pantry', 'Greenhouse', 'Spring Crops Bundle'),
    ('8', 'Pantry', 'Greenhouse', 'Summer Crops Bundle'),
    ('9', 'Pantry', 'Greenhouse', 'Fall Crops Bundle'),
    ('10', 'Pantry', 'Greenhouse', 'Quality Crops Bundle'),
    ('11', 'Pantry', 'Greenhouse', 'Animal Bundle'),
    ('12', 'Pantry', 'Greenhouse', 'Artisan Bundle'),
    
    ('13', 'Fish Tank', 'Glittering Boulder Removed', 'River Fish Bundle'),
    ('14', 'Fish Tank', 'Glittering Boulder Removed', 'Lake Fish Bundle'),
    ('15', 'Fish Tank', 'Glittering Boulder Removed', 'Ocean Fish Bundle'),
    ('16', 'Fish Tank', 'Glittering Boulder Removed', 'Night Fishing Bundle'),
    ('17', 'Fish Tank', 'Glittering Boulder Removed', 'Crab Pot Bundle'),
    ('18', 'Fish Tank', 'Glittering Boulder Removed', 'Specialty Fish Bundle'),
    
    ('19', 'Boiler Room', 'Minecarts Repaired', 'Minecarts Repaired'),
    ('20', 'Boiler Room', 'Minecarts Repaired', 'Geologists Bundle'),
    ('21', 'Boiler Room', 'Minecarts Repaired', 'Adventurers Bundle'),
    
    ('22', 'Bulletin Board', 'Friendship', 'Chefs Bundle'),
    ('23', 'Bulletin Board', 'Friendship', 'Dye Bundle'),
    ('24', 'Bulletin Board', 'Friendship', 'Field Research Bundle'),
    ('25', 'Bulletin Board', 'Friendship', 'Fodder Bundle'),
    ('26', 'Bulletin Board', 'Friendship', 'Enchanters Bundle'),
    
    ('27', 'Vault', 'Bus Repair', '2,500 Bundle'),
    ('28', 'Vault', 'Bus Repair', '5,000 Bundle'),
    ('29', 'Vault', 'Bus Repair', '10,000 Bundle'),
    ('30', 'Vault', 'Bus Repair', '25,000 Bundle');
    
INSERT INTO `Map` (`Map_ID`, `Map_loc`, `Map_place`)
	VALUES ('1', 'Pelican Town', 'Blacksmith'),
    ('2', 'Pelican Town', 'Community Center'),
    ('3', 'Pelican Town', 'Harveys Clinic'),
    ('4', 'Pelican Town', 'JojaMart'),
    ('5', 'Pelican Town', 'Mayors Manor'),
    ('6', 'Pelican Town', 'Museum'),
    ('7', 'Pelican Town', 'Pierres'),
    ('8', 'Pelican Town', 'The Saloon'),
    ('9', 'Pelican Town', 'The Sewers'),
    ('10', 'Pelican Town', 'Trailer'),
    
    ('11', 'The Beach', 'Elliotts Cabin'),
    ('12', 'The Beach', 'Fish Shop'),
    
    ('13', 'Cindersap Forest', 'Abandoned House'),
    ('14', 'Cindersap Forest', 'Marnies Ranch'),
    ('15', 'Cindersap Forest', 'Secret Woods'),
    ('16', 'Cindersap Forest', 'Traveling Cart'),
    ('17', 'Cindersap Forest', 'Wizards Tower'),
    
    ('18', 'The Desert', 'Casino'),
    ('19', 'The Desert', 'Oasis'),
    ('20', 'The Desert', 'Skull Cavern'),
    
    ('21', 'The Mountain', 'Adventurers Guild'),
    ('22', 'The Mountain', 'Carpenters Shop'),
    ('23', 'The Mountain', 'The Mines'),
    ('24', 'The Mountain', 'Quarry'),
    ('25', 'The Mountain', 'Railroad'),
    ('26', 'The Mountain', 'Spa');
    
SELECT * FROM user_info;
SELECT * FROM NPC;
