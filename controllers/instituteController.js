const { sequelize, Institute, Board, ClassCategory, Standard, Subject, University, ExamType } = require('../models');

exports.register = async (req, res) => {
    try {
        const { name, type, board_id, medium, class_category_id, standard_id, subject_ids, university_id, degreeType } = req.body;

        if (!type) {
            return res.status(400).json({ error: 'Institute type is required' });
        }
        let responseData = {};
        switch (type.toLowerCase()) {
            case 'school':
                if (!board_id || !medium || !class_category_id || !standard_id || !subject_ids) {
                    return res.status(400).json({ error: 'Board, medium, class category, standard and subject are required for school' });
                }
                const board = await Board.findByPk(board_id);
                const classCategory = await ClassCategory.findByPk(class_category_id);
                const standard = await Standard.findByPk(standard_id);
                const subjects = await Subject.findAll({ where: { subject_id: subject_ids} });
                console.log(subjects);
                if (!board || !classCategory || !standard) {
                    return res.status(400).json({ error: 'Invalid board, class category, standard or subject' });
                }

                responseData = {
                    type,
                    board: board.name,
                    classCategory: classCategory.name,
                    standard: standard.name,
                    subjects: subjects.map(subject => subject.name),
                };
                break;
            
            case 'college':
                if (!university_id || !degreeType) {
                    return res.status(400).json({ error: 'University and degree type are required for college' });
                }

                const universities = await University.findAll({ where: { university_id: universityId } });
                if (!universities.length) {
                    return res.status(400).json({ error: 'Invalid university' });
                }

                responseData = {
                    type,
                    university: universities[0].name,
                    degreeType,
                };
                break;

            case 'playhouse':
                responseData = {
                    type,
                    message: 'Playhouse doesn\'t require any additional information',
                };
                break;
            case 'competitive exam center':
                responseData = {
                    type,
                    message: 'Competitive exam center not fully implemented yet',
                };
                break;
            default:
                return res.status(400).json({ error: 'Invalid institute type' });

                
            }
            res.status(201).json({message: 'Institute registered successfully', data: responseData});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllInstitutes = async (req, res) => {
    try {
        const institutes = await Institute.findAll();
        res.status(200).json(institutes);
    } catch (error) {     
        res.status(500).json({ error: error.message });
    }
}

exports.getInstituteById = async (req, res) => {
    try {
        const {instituteId} = req.params;
        const institute = await Institute.findByPk(instituteId);
        res.status(200).json(institute);
    }  catch (error) {
        res.status(500).json({ error: error.message });
    }   
}

exports.getBoards = async (req, res) => {
    const {instituteId} = req.params;
    
    try {
        const boards = await Board.findAll({ where: { institute_id: instituteId } });
        res.status(200).json(boards);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getClassCategories = async (req, res) => {
    try {
        const {instituteId} = req.params;
        const classCategories = await ClassCategory.findAll({ where: { institute_id: instituteId } });
        res.status(200).json(classCategories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getStandards = async (req, res) => {
    try {
        const {classCategoryId} = req.params;
        const standards = await Standard.findAll({ where: { class_category_id: classCategoryId } });
        res.status(200).json(standards);
    } catch (error) {     
        res.status(500).json({ error: error.message });
    }
};

exports.getSubjects = async (req, res) => {
    try {
        const {standardId} = req.params;
        const subjects = await Subject.findAll({ where: { standard_id: standardId } });
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUniversities = async (req, res) => {
    try {
        const universities = await University.findAll();
        res.status(200).json(universities);
    } catch (error) {     
        res.status(500).json({ error: error.message });
    }
}
