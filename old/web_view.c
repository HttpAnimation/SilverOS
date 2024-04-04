#include <gtk/gtk.h>
#include <webkit2/webkit2.h>

static void destroy_window_callback(GtkWidget *widget, gpointer data) {
    gtk_main_quit();
}

int main(int argc, char *argv[]) {
    gtk_init(&argc, &argv);

    // Create the main window
    GtkWidget *window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
    gtk_window_set_default_size(GTK_WINDOW(window), 800, 600);
    g_signal_connect(window, "destroy", G_CALLBACK(destroy_window_callback), NULL);

    // Create the web view
    GtkWidget *webView = webkit_web_view_new();

    // Load the index.html file
    gchar *filePath = g_strdup_printf("file://%s", "index.html");
    webkit_web_view_load_uri(WEBKIT_WEB_VIEW(webView), filePath);
    g_free(filePath);

    // Add the web view to the main window
    gtk_container_add(GTK_CONTAINER(window), webView);

    // Show all widgets
    gtk_widget_show_all(window);

    // Start the GTK main loop
    gtk_main();

    return 0;
}
