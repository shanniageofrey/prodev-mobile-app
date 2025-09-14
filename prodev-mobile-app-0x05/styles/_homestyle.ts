import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F6",
  },
  searchGroup: {
    padding: 16,
    backgroundColor: "white",
  },
  searchFormGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
  },
  searchControl: {
    borderBottomWidth: 0,
    marginTop: 8,
    paddingVertical: 8,
  },
  searchButton: {
    backgroundColor: "#34967C",
    height: 44,
    width: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  filterGroup: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    columnGap: 12,
  },
  filterContainer: {
    width: 72,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  listingContainer: {
    padding: 16,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E6E6E6",
  },
  showMoreButtonText: {
    color: "#333",
    fontWeight: "600",
  },
});
