/**
 * The starting point of the application.
 *
 * @author Simon Palm
 * @version 1.0.0
 */

 'use strict'

 import { descriptiveStatistics } from './src/statistics.js'
 
 let descriptiveInformation
 
 descriptiveInformation = descriptiveStatistics([4, 8, 2, 4, 5])
 console.log(descriptiveInformation)
 
 descriptiveInformation = descriptiveStatistics([4, 2, 6, 1, 3, 7, 5, 3, 7])
 console.log(descriptiveInformation)
 
 descriptiveInformation = descriptiveStatistics([5, 1, 1, 1, 3, -2, 2, 5, 7, 4, 5, 16])
 console.log(descriptiveInformation)
 