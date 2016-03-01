Package.describe({
  name: 'superlumen:react-forms-semantic-ui',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Create simple form fields with react and semantic-ui.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('es5-shim');
  api.use('react');

  api.addFiles('SLInput.component.both.jsx');
  api.addFiles('SLTextArea.component.both.jsx');

  api.export('SLInput');
  api.export('SLTextArea');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('es5-shim');
//   api.use('react');
//   api.use('superlumen:react-forms');
//   api.addFiles('react-forms-tests.js');
// });
