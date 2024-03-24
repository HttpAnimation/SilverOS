// What does this fucking do?
(function(details) {
    if ( self.uBO_isolatedScriptlets === 'done' ) { return; }
    const doc = document;
    if ( doc.location === null ) { return; }
    const hostname = doc.location.hostname;
    if ( hostname !== '' && details.hostname !== hostname ) { return; }
    const isolatedScriptlets = function() {
// >>>> start of private namespace
