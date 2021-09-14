/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.adminLte = (req, res) => {
  res.render('admin-lte/Dashboard', {
    title: 'Dashboard - Admin'
  });
};

exports.postFileUpload = (req, res) => {
  req.flash('success', { msg: 'File was uploaded successfully.' });
  res.redirect('admin-lte/Dashboard');
};
