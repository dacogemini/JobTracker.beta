
-- 
-- Table structure for `JobCat`
-- 
CREATE DATABASE JobCat_db;
USE JobCat_db;
CREATE TABLE IF NOT EXISTS `JobCat_db` (
  `id` int(11) NOT NULL,
  `job_listing` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `salary` DECIMAL(65) NOT NULL,
  `skills` varchar(200) NOT NULL,
  `interesting_facts` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `JobCat_db` ADD PRIMARY KEY (`id`);
ALTER TABLE `JobCat_db` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;



