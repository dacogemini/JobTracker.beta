
-- 
-- Table structure for `JobCat`
-- 
CREATE DATABASE ActiveJobs_db;
USE ActiveJobs_db;
CREATE TABLE IF NOT EXISTS `ActiveJobs_db` (
  `id` int(11) NOT NULL,
  `job_listing` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `salary` varchar(200) NOT NULL,
  `skills` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `ActiveJobs_db` ADD PRIMARY KEY (`id`);
ALTER TABLE `ActiveJobs_db` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;



