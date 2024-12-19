const express = require('express');
const router = express.Router();
const {
    register,
    getAllInstitutes,
    getInstituteById,
    getBoards,
    getClassCategories,
    getStandards,
    getSubjects,
    getUniversities
} = require('../controllers/instituteController');

router.post('/register',register);

router.get('/institute-list', getAllInstitutes);
router.get('/institute/:instituteId', getInstituteById);

router.get('/boards/:instituteId', getBoards);

router.get('/class-categories/:instituteTypeId', getClassCategories);

router.get('/standards/:classCategoryId', getStandards);

router.get('/subjects/:standardId', getSubjects);

router.get('/universities', getUniversities);

module.exports = router;